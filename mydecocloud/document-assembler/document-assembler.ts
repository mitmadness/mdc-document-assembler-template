import { ensureNonNull, ethrow, Stopwatch, throwThisShouldNeverHappenError } from '@mitm/common';
import config from '@mitm/config';
import { SyncLocalesRegistry, TranslateFn, translateWithLocale } from '@mitm/intl';
import {
    Event, InputDocumentChunkManifest, InputDocumentManifest, OutputDocumentManifest
} from '@mydecocloud/interfaces/documents';
import * as jtd from '@mydecocloud/interfaces/jtd';
import ajvJtd from 'ajv/dist/jtd.js';
import { commaLists, oneLine } from 'common-tags';
import fs from 'fs-extra';
import * as lodash from 'lodash-es';
import micromatch from 'micromatch';
import * as os from 'node:os';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';
import { renderToString } from 'preact-render-to-string';
import * as puppeteer from 'puppeteer';
import { Observable } from 'rxjs';
import {
    Document, DocumentChunk, DocumentChunkParameters, DocumentChunksMap, DocumentChunkWarning, DocumentGeneratorFn,
    DocumentParameters, isParametrizedChunk, MergeDocumentChunk, ParametrizedDocumentChunk, PdfLibDocumentChunk,
    PuppeteerDocumentChunk, ResolvedDocumentChunk
} from './definitions.js';
import { DocumentStorage } from './document-storage/index.js';
import { documentAssemblerRegistry } from './intl/index.js';
import * as puppeteerHelpers from './puppeteer.js';

/**
 * Options for constructing a {@link DocumentAssembler}.
 */
interface DocumentAssemblerOptions {
    /**
     * The storage implementation to use for storing generated documents and making them publicly available.
     */
    readonly documentStorage: DocumentStorage;

    /**
     * The locales registry to use for localization, if you wish to support multiple languages.
     */
    readonly localesRegistry?: SyncLocalesRegistry;

    /**
     * How errors thrown by a {@link DocumentGeneratorFn} should be serialized.
     * You may filter here potentially sensitive information, as by default the error message is used and potentially
     * shown to the end user.
     */
    readonly errorSerializer?: (error: unknown) => string;
}

type EmitEventFn = (event: Event) => void;

/**
 * The entry point API for generating documents.
 * Construct one and call {@link generate} with received manifest and your document generator function to start the
 * generation process.
 */
export class DocumentAssembler {
    private readonly documentStorage: DocumentStorage;

    private readonly localesRegistry?: SyncLocalesRegistry | undefined;

    private readonly errorSerializer: (error: unknown) => string;

    public constructor(options: DocumentAssemblerOptions) {
        this.documentStorage = options.documentStorage;
        this.localesRegistry = options.localesRegistry;

        this.errorSerializer = options.errorSerializer ?? (err => err instanceof Error ? err.message : String(err));
    }

    /**
     * Generates a document from the given manifest and generator function.
     * Returns an observable for following the generation progress.
     */
    public generate<TDocumentName extends InputDocumentManifest['document']>(
        manifest: InputDocumentManifest<TDocumentName>,
        generatorFn: DocumentGeneratorFn<TDocumentName>): Observable<Event> {

        return new Observable(observer => {
            const generator = (manifest.manifestOnly ? this.generateManifest : this.generateDocument).bind(this);

            // Translation function for the generator library.
            const t = translateWithLocale(
                documentAssemblerRegistry,
                manifest.locale ?? documentAssemblerRegistry.defaultLocale);

            const documentParameters = this.getDocumentParameters(manifest);

            generator(event => observer.next(event), t, manifest, documentParameters, generatorFn)
                .then(() => observer.complete())
                .catch(error => {
                    observer.next({
                        kind: 'error',
                        message: this.errorSerializer(error)
                    });

                    observer.error(error);
                });
        });
    }

    /**
     * Returns the document parameters to pass to the document generator function given a manifest.
     * Provided as an overridable method to allow customizing how this object is created.
     */
    protected getDocumentParameters<TDocumentName extends InputDocumentManifest['document']>(
        manifest: InputDocumentManifest<TDocumentName>): DocumentParameters<TDocumentName> {

        const locale = manifest.locale
            ? this.localesRegistry?.getSupportedLocale(manifest.locale)
            : this.localesRegistry?.defaultLocale;

        const dateFnsLocale = locale ? this.localesRegistry?.getDateFnsLocale(locale) : undefined;

        const translateFn = this.localesRegistry && translateWithLocale(this.localesRegistry, locale!);

        return {
            input: manifest.input as DocumentParameters<TDocumentName>['input'],
            timeZoneOffset: manifest.timeZoneOffset ?? 0,
            get locale() {
                return locale ?? ethrow(new Error('No locales registry was provided.'));
            },
            get dateFnsLocale() {
                return dateFnsLocale ?? ethrow(new Error('No locales registry was provided.'));
            },
            get t() {
                return translateFn ?? ethrow(new Error('No locales registry was provided.'));
            }
        };
    }

    /**
     * Generates a manifest.
     */
    private async generateManifest<TDocumentName extends InputDocumentManifest['document']>(
        emit: EmitEventFn,
        t: TranslateFn,
        manifest: InputDocumentManifest<TDocumentName>,
        parameters: DocumentParameters<TDocumentName>,
        generatorFn: DocumentGeneratorFn<TDocumentName>): Promise<void> {

        const document = await generatorFn(parameters);

        const flattenedChunks = await this.resolveDocumentChunks(emit, t, document.chunks, manifest.chunks ?? []);

        emit({
            kind: 'manifest',
            manifest: this.makeOutputDocumentManifest(manifest, parameters, document, flattenedChunks)
        });
    }

    /**
     * Generates a manifest and a document.
     */
    private async generateDocument<TDocumentName extends InputDocumentManifest['document']>(
        emit: EmitEventFn,
        t: TranslateFn,
        manifest: InputDocumentManifest<TDocumentName>,
        parameters: DocumentParameters<TDocumentName>,
        generatorFn: DocumentGeneratorFn<TDocumentName>): Promise<void> {

        // Nous pouvons commencer à générer le document.
        // On initialise le générateur qui va déjà retourner les infos de base et la liste des chunks...
        emit({ kind: 'log', message: `Creating document of type "${manifest.document}"...` });

        emit({ kind: 'progress', message: t('Initializing') });

        const document = await generatorFn(parameters);

        // On crée une liste plate de tous les chunks (un chunk "group" peut avoir des enfants).
        const flattenedChunks = await this.resolveDocumentChunks(emit, t, document.chunks, manifest.chunks ?? []);

        // On commence à préparer le rendu à partir d'ici.
        // On commence par ne garder que les chunks activés dans la liste plate.
        const renderableChunks = flattenedChunks.filter(chunk => chunk.render);

        // On crée le manifeste de sortie.
        const outputManifest = this.makeOutputDocumentManifest(manifest, parameters, document, flattenedChunks);

        emit({ kind: 'manifest', manifest: outputManifest });

        // On crée le document pdf-lib principal qui accueillera les pages générées.
        const doc = await PDFDocument.create();

        // Remplissage des métadonnées du document.
        doc.setTitle(outputManifest.title);
        doc.setCreator('myDecoCloud');

        outputManifest.author && doc.setAuthor(outputManifest.author);
        outputManifest.producer && doc.setProducer(outputManifest.producer);

        document.keywords && doc.setKeywords(document.keywords);
        document.subject && doc.setSubject(document.subject);

        // On vide le répertoire de debug (il est créé s'il n'existe pas).
        const debugDir = path.resolve(
            `${os.tmpdir()}/document-assembler-debug/${manifest.document}/${doc.getTitle()}`);

        if (config.default.nodeEnv == 'development') {
            await fs.emptyDir(debugDir);
        }

        // Initialisation de la fonction de pagination.
        const drawPageNumber = await document.paginate?.(doc);

        // Si certains chunks demandent un rendu avec Puppeteer, on va préparer une page de rendu.
        // Cette page sera réinitialisée et réutilisée pour chaque chunk, pour des performances optimales. On espère que
        // ça ne fait pas de side effect au niveau du DOM, mais on ne peut le garantir pour le JavaScript, les chunks
        // vont devoir gentiment s'assurer de laisser un runtime propre derrière eux.
        const isPuppeteerNeeded = renderableChunks.some(chunk => chunk.impl.kind == 'puppeteer');
        if (isPuppeteerNeeded) {
            emit({ kind: 'log', message: `Puppeteer is required for this document, opening browser page...` });
        }

        // noinspection ES6MissingAwait -- We can start loading the first chunk(s) while the browser is preparing.
        const htmlRenderingPagePromise = !isPuppeteerNeeded ? undefined : puppeteerHelpers.getNewPage({
            debug: message => emit({ kind: 'log', message }),
            verbose: message => emit({ kind: 'log', message }),
            log: message => emit({ kind: 'log', message }),
            warning: message => emit({ kind: 'log', message }),
            error: (message, error) => emit({
                kind: 'error',
                message: `${message} ${error instanceof Error ? error.message : String(error)}`,
                error
            })
        });

        // On commence pour de vrai. Boucle de rendu des chunks en PDF.
        try {
            // Gestion du retour de progression.
            const totalIterations = renderableChunks.length;
            let doneIterations = 0;

            // Le numéro de page "virtuel" : les chunks peuvent demander à ne pas être comptés (ex. page de garde) et il
            // est donc maintenu séparément du numéro de page physique. C'est ce numéro qui est imprimé par le système
            // de pagination. 1-basé.
            let currentPageNumber = 1;

            for (const chunk of renderableChunks) {
                // Numéro de page physique où commence le chunk, 0-basé.
                const startPageIndex = doc.getPageCount();

                const renderProgress = (): Event<'progress'> => ({
                    kind: 'progress',
                    // Ex. "Section 1 / Section 2 / My Chunk"
                    message: t('GeneratingChunk', {
                        chunkName: [...chunk.parents, chunk].slice(1).map(chk => chk.title).join(' / ')
                    }),
                    stepProgress: Math.round(doneIterations / totalIterations * 100),
                    chunk: {
                        path: chunk.path,
                        kind: chunk.impl.kind,
                        page: startPageIndex
                    }
                });

                // On signale le début du rendu du chunk.
                emit(renderProgress());

                // Chronométrage de la génération. Malheureusement uniquement logué dans les logs du job accessibles via
                // l'interface web pour Bull pour l'instant.
                const stopwatch = new Stopwatch();
                stopwatch.start();

                // Rendu selon le type de chunk. Les fonctions, void, poussent elles-mêmes les pages dans le document.
                switch (chunk.impl.kind) {
                    // On doit faire des casts sur "chunk" car l'inférence est malheureusement cassée ici, mais c'est
                    // safe.
                    case 'group':
                        break;
                    case 'pdf-lib': {
                        await this.renderPdfLibChunk(
                            doc, chunk as ResolvedDocumentChunk<PdfLibDocumentChunk>, currentPageNumber);
                        break;
                    }
                    case 'merge': {
                        await this.renderMergeChunk(
                            doc, chunk as ResolvedDocumentChunk<MergeDocumentChunk>, currentPageNumber);
                        break;
                    }
                    case 'puppeteer': {
                        const htmlRenderingPage = await ensureNonNull(htmlRenderingPagePromise);

                        await this.renderPuppeteerChunk(
                            doc, htmlRenderingPage,
                            chunk as ResolvedDocumentChunk<PuppeteerDocumentChunk>,
                            currentPageNumber, debugDir);

                        break;
                    }
                    default: {
                        throwThisShouldNeverHappenError();
                    }
                }

                // Numéro de page physique où termine le chunk, 0-basé.
                const endPageIndex = doc.getPageCount();

                // Gestion de la numérotation de page via pdf-lib.
                // On incrémentera ici le numéro de page si le chunk n'a pas cette option désactivée explicitement.
                if (chunk.paginate.count) {
                    // Dessin des numéros de page, si le générateur le supporte.
                    if (drawPageNumber && chunk.paginate.draw) {
                        for (let pageIndex = startPageIndex; pageIndex < endPageIndex; pageIndex++) {
                            const page = doc.getPage(pageIndex);
                            const pageNumber = currentPageNumber + pageIndex - startPageIndex;

                            await drawPageNumber(page, pageNumber, chunk);
                        }
                    }

                    currentPageNumber += (endPageIndex - startPageIndex);
                }

                // Un peu de logging plus fin dans le job.
                const renderedPageRangeLog = startPageIndex == endPageIndex
                    ? `page ${startPageIndex}`
                    : `pages ${startPageIndex}-${endPageIndex}`;

                emit({
                    kind: 'log',
                    message: oneLine`
                    Rendered ${chunk.impl.kind} chunk #${doneIterations} ${chunk.path} "${chunk.title}"
                    as physical ${renderedPageRangeLog}
                    in ${stopwatch.elapsed()}ms`
                });

                // On signale la fin du rendu du chunk.
                doneIterations++;

                emit(renderProgress());
            }
        }
        finally {
            // Dans tous les cas on souhaite libérer la page Puppeteer qui nous a servi pour le rendu.
            if (htmlRenderingPagePromise) {
                const page = await htmlRenderingPagePromise;
                await page.close({ runBeforeUnload: false });
            }
        }

        // Écriture du fichier en local pour le debug et fin.
        emit({ kind: 'progress', message: t('PreparingYourFile') });

        const buffer = Buffer.from(await doc.save());

        if (config.default.nodeEnv == 'development') {
            const filePath = path.join(debugDir, `${ensureNonNull(doc.getTitle())}.pdf`);

            await fs.writeFile(filePath, buffer);

            emit({ kind: 'log', message: `Rendered PDF written to ${filePath}` });
        }

        emit({
            kind: 'document',
            documentUrl: await this.documentStorage.store(outputManifest, buffer)
        });
    }

    /**
     * Retourne une liste plate de tous les chunks du document dans l'ordre où ils apparaîtront effectivement dans le
     * document. Résout aussi les {@link DocumentChunk} en {@link ResolvedDocumentChunk}, leur assignant par exemple
     * leur ID absolu dans le document, une référence vers leurs parents et résout {@link DocumentChunk.properties} avec
     * les paramètres de configuration passés par l'utilisateur dans le manifeste.
     * La liste retournée ne contient pas le chunk racine virtuel créé pour aplatir la liste (il serait normalement en
     * [0]).
     */
    private async resolveDocumentChunks(
        emit: EmitEventFn,
        t: TranslateFn,
        chunks: DocumentChunksMap,
        manifest: readonly InputDocumentChunkManifest[]): Promise<ResolvedDocumentChunk[]> {

        const chunkParametersAjv = this.getChunkParametersAjv(emit);

        return (await resolveChunk('', {
            kind: 'group',
            title: 'Document (Virtual Root Chunk)',
            children: chunks
        }, [])).slice(1);

        async function resolveChunk<TParameters extends DocumentChunkParameters>(
            path: string,
            chunkRef: DocumentChunk | ParametrizedDocumentChunk<TParameters>,
            parents: readonly ResolvedDocumentChunk[]): Promise<ResolvedDocumentChunk[]> {

            const parent = parents[parents.length - 1];

            // On trouve les configurations qui matchent ce chunk.
            const manifestEntries = manifest.filter(entry => micromatch.isMatch(path, entry.path));

            // On merge tous les paramètres de génération custom pour ce chunk.
            const rawParameters = manifestEntries.reduce<DocumentChunkParameters | undefined>(
                (params, entry) => entry.parameters
                    ? lodash.merge(params, entry.parameters)
                    : params,
                undefined);

            // Validation des paramètres de génération une fois mergés tous ensembles.
            // S'il y a un problème, on désactive la génération du chunk et on remonte un warning.
            const parametersJtd = isParametrizedChunk(chunkRef) ? chunkRef.parametersJtd : undefined;

            let validationWarnings: DocumentChunkWarning[] = [];
            let validatedParameters: TParameters | undefined;

            // Le chunk a un schéma défini, on vérifie l'objet brut contre celui-ci.
            if (rawParameters && parametersJtd) {
                const validate = chunkParametersAjv.compile(parametersJtd);

                if (validate(rawParameters)) {
                    validatedParameters = rawParameters;
                } else {
                    validationWarnings = ensureNonNull(validate.errors).map(error => ({
                        message: t('InvalidChunkParameter', {
                            message: chunkParametersAjv.errorsText([error], { dataVar: 'parametersJtd' })
                        })
                    }));
                }
            }
            else if (rawParameters) {
                // Le chunk n'a pas de schéma défini, mais on a quand même reçu des paramètres, on signale le problème.
                validationWarnings = [{ message: t('ChunkDoesNotAcceptParameters') }];
            }

            // On résout les propriétés d'un chunk paramétrique, désormais on ne travaille plus qu'avec un
            // DocumentChunk.
            let chunk: DocumentChunk;
            let parameters: TParameters | undefined;

            if (isParametrizedChunk(chunkRef)) {
                parameters = validatedParameters ?? chunkRef.defaultParameters;
                chunk = await chunkRef.chunk(parameters);
            } else {
                chunk = chunkRef;
            }

            // On skip si le chunk le spécifie, ou si l'utilisateur l'a demandé dans le manifeste. L'utilisateur n'a pas
            // le droit de réactiver le render via le manifeste si le chunk ou son parent ont spécifié qu'ils étaient
            // désactivés.
            const render =
                // Skip si le chunk le spécifie explicitement...
                chunk.render !== false &&
                // Ou si son parent le spécifie explicitement ou indirectement (il hérite lui-même de son parent)...
                parents[parents.length - 1]?.render !== false &&
                // Ou si l'utilisateur a spécifié un render = false dans le manifeste.
                !manifestEntries.some(entry => entry.render === false);

            const resolvedChunk: ResolvedDocumentChunk = {
                parent, parents, path, render,
                parametersJtd: parametersJtd as jtd.PropertiesForm,
                parameters,
                title: chunk.title,
                warnings: [...validationWarnings, ...chunk.warnings ?? []]
                    .filter(warning => warning.condition === undefined || warning.condition)
                    .map(({ message, link }) => ({ message, link })),
                paginate: {
                    count: chunk.paginate?.count ?? true,
                    draw: chunk.paginate?.draw ?? true
                },
                onPageImported: chunk.onPageImported,
                onPagesImported: chunk.onPagesImported,
                impl: chunk
            };

            if (chunk.kind != 'group') {
                return [resolvedChunk];
            }

            const resolvedChildren: ResolvedDocumentChunk[] = [];

            for (const [childPath, child] of Object.entries(chunk.children)) {
                resolvedChildren.push(
                    ...await resolveChunk(`${path}/${childPath}`, await child, [...parents, resolvedChunk]));
            }

            return [resolvedChunk, ...resolvedChildren];
        }
    }

    private makeOutputDocumentManifest(
        manifest: InputDocumentManifest,
        { locale, timeZoneOffset }: DocumentParameters,
        document: Document,
        chunks: readonly ResolvedDocumentChunk[]): OutputDocumentManifest {

        const title = manifest.title?.trim() || document.fallbackTitle || 'Untitled';

        const author =
            typeof manifest.author == 'string' ? manifest.author :
            manifest.author ? `${manifest.author.name} <${manifest.author.email}>` :
            document.fallbackAuthor;

        const producer =
            document.producer ||
            ((manifest.author && typeof manifest.author != 'string') ? manifest.author.org : undefined)

        return {
            document: manifest.document,
            locale, timeZoneOffset,
            title, author, producer,
            chunks: chunks.map(chunk => {
                const parentIndex = chunk.parent && chunks.indexOf(chunk.parent);

                return {
                    // ! NE SURTOUT PAS FAIRE DE SPLAT ICI ({ ...chunk }) MÊME SI LES INTERFACES SONT COMPATIBLES !
                    // ! Ces objets sont sérialisés tels quels et ResolvedDocumentChunk contient des fonctions et tout
                    // ! un tas de choses pas du tout faites pour ça. Cela fait s'effondrer les perfs du worker/Redis.
                    parent: parentIndex == -1 ? undefined : parentIndex,
                    path: chunk.path,
                    render: chunk.render,
                    parameters: chunk.parameters,
                    parametersJtd: chunk.parametersJtd,
                    title: chunk.title,
                    warnings: chunk.warnings ?? []
                };
            })
        };
    }

    private getChunkParametersAjv(emit: EmitEventFn): ajvJtd.default {
        return new ajvJtd.default({
            logger: {
                log: args => emit({
                    kind: 'log', message: commaLists`Chunk parameters JTD validation: ${args}`
                }),
                warn: args => emit({
                    kind: 'log', message: commaLists`Chunk parameters JTD validation warning: ${args}`
                }),
                error: args => emit({
                    kind: 'log', message: commaLists`Chunk parameters JTD validation error: ${args}`
                })
            },
            // Clés utilisables dans le champ "metadata" du schéma JTD pour ajouter des informations à un champ.
            // Voir docblock de `BaseDocumentChunk.parametersJtd`.
            keywords: ['label', 'default', 'enumLabels', 'inputTypeHint', 'fileUrl']
        });
    }

    private async renderPdfLibChunk(
        doc: PDFDocument, chunk: ResolvedDocumentChunk<PdfLibDocumentChunk>, pageNumber: number): Promise<void> {

        const page = doc.addPage();

        await chunk.impl.draw(page, pageNumber);

        await chunk.onPageImported?.(page, pageNumber);
        await chunk.onPagesImported?.([page]);
    }

    private async renderMergeChunk(
        doc: PDFDocument, chunk: ResolvedDocumentChunk<MergeDocumentChunk>, pageNumber: number): Promise<void> {

        const { document: source, indices } = await chunk.impl.load();

        // On charge le document dans PDF-Lib si ça n'est pas déjà fait.
        const sourceDocument = source instanceof PDFDocument
            ? source
            : await PDFDocument.load(source);

        // Et on insère ses pages dans notre document.
        // Note : on ne peut pas directement réattribuer les pages du sous-document à notre document, il faut les copier
        // sinon pdf-lib jette une erreur.
        const copiedPages = await doc.copyPages(sourceDocument, indices ?? sourceDocument.getPageIndices());

        for (const copiedPage of copiedPages) {
            doc.addPage(copiedPage);

            await chunk.onPageImported?.(copiedPage, pageNumber);
        }

        await chunk.onPagesImported?.(copiedPages);
    }

    private async renderPuppeteerChunk(
        doc: PDFDocument,
        renderingPage: puppeteer.Page,
        chunk: ResolvedDocumentChunk<PuppeteerDocumentChunk>,
        pageNumber: number,
        debugDir: string): Promise<void> {

        // Récupération du document.
        const renderResult = await chunk.impl.renderDom(pageNumber);

        // Si des VNodes ont été retournés (JSX) on convertit en string.
        const html = typeof renderResult == 'string'
            ? renderResult
            : renderToString(renderResult);

        // Si le string ne commence pas avec doctype (en ignorant les espaces et la case), on en ajoute un.
        const htmlWithDoctype = html.match(/^\s*<!DOCTYPE/mi) ? html : `<!DOCTYPE html>\n${html}`;

        // On écrit le HTML dans le répertoire de debug.
        // Trop pratique quand on veut inspecter un HTML généré.
        if (config.default.nodeEnv == 'development') {
            const htmlFilePath = path.join(debugDir, `Chunk ${pageNumber} - ${chunk.title}.html`);

            await fs.writeFile(htmlFilePath, htmlWithDoctype);
        }

        // Options de rendu puppeteer.
        const {
            // ! Si vous changez les valeurs par défaut, mettez à jour le dockblock des options dans PuppeteerPage.
            // ! Assurez-vous aussi de la rétrocompatibilité du changement.
            // ! Mais dans tous les cas, merci de ne pas utiliser une stratégie non déterministe comme networkidle*.
            waitForOptions = { waitUntil: 'load' },
            pdfOptions = { format: 'a4', printBackground: true }
        } = chunk.impl;

        try {
            // Initialisation du contenu de la page.
            await renderingPage.setContent(htmlWithDoctype, waitForOptions);
        } catch (err) {
            if (err instanceof puppeteer.TimeoutError) {
                const exceededDelay = parseInt(err.message.match(/(\d+)\s?ms/)?.[1] ?? '0', 10);

                throw new Error(
                    `Could not load page content for PDF rendering, timeout of ${exceededDelay}ms exceeded.`);
            }

            throw err;
        }

        // Attente des webfonts. S'il n'y en a pas qui sont utilisées ça va retourner vite, pas de soucis.
        await renderingPage.evaluate(() => document.fonts.ready);

        // Callback permettant au code consommateur de faire des actions sur/avec la page avant le rendu.
        await chunk.impl.onPageLoaded?.(renderingPage);

        // Rendu du PDF intermédiaire par puppeteer.
        const pdfBuffer = await renderingPage.pdf(pdfOptions);

        // On charge le PDF retourné par puppeteer dans pdf-lib.
        const subDocument = await PDFDocument.load(pdfBuffer);

        // Et on insère chacune de ses pages dans notre document.
        // Note : on ne peut pas directement réattribuer les pages du sous-document à notre document, il faut les copier
        // sinon pdf-lib jette une erreur.
        const copiedPages = await doc.copyPages(subDocument, subDocument.getPageIndices());

        for (const copiedPage of copiedPages) {
            doc.addPage(copiedPage);

            await chunk.onPageImported?.(copiedPage, pageNumber);
        }

        await chunk.onPagesImported?.(copiedPages);
    }
}
