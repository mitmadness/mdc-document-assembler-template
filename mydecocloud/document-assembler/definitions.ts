/**
 * Ce fichier contient les interfaces spécifiques à notre implémentation de DocumentAssembler :
 *  - Utilitaires pour interpréter un {@link InputDocumentManifest},
 *  - Interfaces pour générer des chunks selon différentes méthodes (pdf-lib, puppeteer, etc.) et de les organiser
 *    hiérarchiquement,
 *  - Préparation de l'output manifest.
 *
 * ! Those are shared definitions. All exported symbols here are exported in the package entry point.
 * ! Internal stuff should be in separate files.
 */

import { MaybePromise } from '@mitm/common';
import { TranslateFn } from '@mitm/intl';
import { JsonObject } from '@mydecocloud/interfaces/common';
import { InputDocumentManifest, OutputDocumentChunkManifest } from '@mydecocloud/interfaces/documents';
import { JTDSchemaType } from 'ajv/dist/types/jtd-schema.js';
import type * as dfns from 'date-fns';
import * as pdfLib from 'pdf-lib';
import { VNode } from 'preact';
import * as puppeteer from 'puppeteer';

/**
 * Une fonction point d'entrée pour générer un document.
 */
export type DocumentGeneratorFn<TDocumentName extends InputDocumentManifest['document']> =
    (parameters: DocumentParameters<TDocumentName>) => MaybePromise<Document>;

/**
 * Paramètres pour générer le document, dérivé de l'{@link InputDocumentManifest}.
 *
 * Note : Le type de document par défaut est "any" pour permettre une utilisation de l'interface facile quand on n'a
 * pas besoin de lire la propriété {@link input}, qui sera alors unknown, donc il s'agit d'un "any" propre.
 */
export type DocumentParameters<TDocumentName extends InputDocumentManifest['document'] = any> = {
    /**
     * Locale de l'utilisateur (normalisée) si précisée dans la requête, sinon la locale par défaut spécifiée par le
     * registre de locales.
     */
    readonly locale: string;

    /**
     * Fonction de traduction paramétrisée avec la {@link locale} du client si précisée dans la requête.
     */
    readonly t: TranslateFn;

    /**
     * Locale date-fns correspondant à la {@link locale} du client si précisée dans la requête.
     */
    readonly dateFnsLocale: dfns.Locale;

    /**
     * Nombre de minutes de décalage que le client a avec UTC. Indispensable pour formater des dates côté serveur.
     */
    readonly timeZoneOffset: number;

    /**
     * Paramètres "statiques" (en contraste au système de paramètres de chunks) spécifiques au type de document et
     * déterminés par la plateforme myDecoCloud.
     */
    readonly input: TDocumentName extends InputDocumentManifest['document']
        ? InputDocumentManifest<TDocumentName>['input']
        : unknown;
};

/**
 * Structure représentant la structure et les métadonnées d'un document prêt à être généré.
 */
export interface Document {
    /**
     * Titre du document SI l'utilisateur ou la plateforme myDecoCloud ne spécifient pas eux-mêmes le titre via
     * {@link InputDocumentManifest.title}, qui prend la priorité.
     * Le titre sert à déterminer le nom du fichier, et est inscrit dans les métadonnées du document (ex. visible dans
     * la barre de titre d'un lecteur PDF).
     */
    readonly fallbackTitle: string;

    /**
     * Auteur du document SI la plateforme myDecoCloud n'a pas de contexte d'utilisateur à donner via
     * {@link InputDocumentManifest.author}, qui prend la priorité.
     * La valeur sera inscrite dans les métadonnées du document.
     */
    readonly fallbackAuthor?: string;

    /**
     * Entité qui émet le document.
     * Si non défini, la valeur "org" de {@link InputDocumentManifest.author} peut-être utilisée si elle-même est
     * disponible.
     * La valeur sera inscrite dans les métadonnées du document.
     */
    readonly producer?: string;

    /**
     * Description du document.
     * La valeur sera inscrite dans les métadonnées du document.
     */
    readonly subject?: string;

    /**
     * Mots-clés pour le document.
     * La valeur sera inscrite dans les métadonnées du document.
     */
    readonly keywords?: string[];

    /**
     * Callback appelé pour initialiser la liste complète des pages du document.
     *
     * ---- Note d'implémentation & Performances ----
     *
     * À l'origine cela a été implémenté avec un générateur JavaScript, cela rendait le traitement "lazy", permettant de
     * potentielles économies de mémoire, car tout n'a pas à être instancié d'un bloc et les générateurs de pages
     * traités pouvaient être discardées au fur et à mesure.
     *
     * Le problème est que cela rendait plus compliqué l'estimation du pourcentage de progression de la génération et
     * rendait (quasiment) impossible la gestion robuste de la génération de table des matières et de la pagination.
     *
     * Cela ne devrait en réalité pas poser de problèmes d'avoir une liste complète des générateurs de pages en mémoire,
     * en revanche il est donc recommandé de mettre le minimum de code d'initialisation dans la fonction
     * {@link Document.create} directement (juste de quoi construire cet array), et d'en déporter le plus possible
     * dans les fonctions de rendu des objets {@link DocumentChunk}.
     */
    readonly chunks: Readonly<DocumentChunksMap>;

    /**
     * Callbacks de pagination "a postériori". Utile pour dessiner un numéro de page sur chaque page, notamment les
     * pages importées via {@link MergeDocumentChunk}.
     * Pour des raisons de cohérence visuelle et de simplicité, il est recommandé d'utiliser cette technique sur toutes
     * les pages, ou bien sur aucune (ex. rendu intégralement en HTML).
     * Le premier callback doit retourner un second callback de pagination qui sera appelé pour chaque page. Ce premier
     * callback vous permet, si besoin, de préparer des ressources utilisées dans le second callback (ex. instancier une
     * image).
     */
    readonly paginate?: (doc: pdfLib.PDFDocument) =>
        MaybePromise<(page: pdfLib.PDFPage, pageNumber: number, chunk: ResolvedDocumentChunk) => MaybePromise<void>>;
}

/**
 * Type d'objet qu'un chunk peut demander en paramètre via son schéma ({@link DocumentChunk.parametersJtd}).
 * Tout structure d'objet peut être utilisée aux conditions suivantes :
 *  - L'objet est sérialisable en JSON ;
 *  - La valeur de base est un objet (genre POJO).
 */
export type DocumentChunkParameters = JsonObject;

/**
 * Un groupe de chunks avec leur chemin dans le groupe (comme le path d'une route).
 * Ex. étant donné la structure (simplifiée) de chunks "group" suivante :
 *
 * `{ children: { a: { children: { b: { children: { c: {} } } } } } }`
 *
 * Nous aurons les chunks au paths suivants :
 *  - /a
 *  - /a/b
 *  - /a/b/c
 *
 * Chaque chunk possède alors son chemin/identifiant unique dans le document.
 *
 * @example
 * {
 *     hello: { kind: 'string', str: 'Hello' },
 *     world: withParameters<{ name: string }>({
 *         parametersJtd: { properties: { name: { type: 'string' } } },
 *         defaultParameters: { name: 'World' },
 *         chunk: ({ name }) => ({ kind: 'chunktype', str: name }),
 *     })
 * }
 */
export interface DocumentChunksMap {
    // Non marqué en readonly pour faciliter la réutilisation de cette interface et les .reduce<DocumentChunksMap>().
    [path: string]: MaybePromise<
        | DocumentChunk
        // On utilise `any` pour arrêter la contagion de types génériques vers les types upstream, cela devient
        // inutilement complexe sinon. Il faut juste faire attention quand on consomme cette interface, ce qui
        // généralement ne devrait pas arriver. Sinon, il faut reparamétriser le type en
        // <T extends DocumentChunkParameters>.
        | ParametrizedDocumentChunk<any /** extends DocumentChunkParameters */>>;
}

/**
 * Un objet à placer en tant qu'élément de {@link DocumentChunksMap} pour paramétriser un {@link DocumentChunk} avec des
 * paramètres utilisateur dynamiques passés dans l'input manifest, dans lequel les paramètres sont rattachés au chunk
 * enfant ainsi paramétrisé.
 * Il est recommandé de wrapper cet objet dans {@link withParameters} pour bénéficier de l'inférence de `TParameters`.
 * Pour `TParameters`, utilisez un `type` plutôt qu'une `interface` pour ne pas avoir d'erreur à propos du fait que
 * l'interface n'implémente par l'index signature.
 *
 * --- Notes d'implémentation ---
 * Avant, les paramètres étaient directement attachés à l'objet {@link DocumentChunk} qui déclarait ainsi ses variables
 * paramétriques. Cela avait pour effet de rendre les overrides depuis le parent bien plus complexes et nécessitait de
 * "thunkifier" derrière une fonction (prenant les paramètres en argument) toutes les propriétés de l'actuel
 * {@link DocumentChunk}, sauf les propriétés de cette interface.
 * Cela complexifiait beaucoup la structure et la lecture des {@link DocumentChunk} et nous faisait perdre un niveau
 * d'indentation systématiquement (à cause de la fonction de paramétrisation).
 * Ramener la déclaration des paramètres au niveau du parent est une solution beaucoup plus générale, souple et moins
 * invasive dans la déclaration des chunks.
 */
export interface ParametrizedDocumentChunk<TParameters extends DocumentChunkParameters> {
    /**
     * Schéma représentant la forme d'un éventuel objet de configuration accepté par le chunk, voir absolument
     * {@link OutputDocumentChunkManifest.parametersJtd} sur le type et le fonctionnement du schéma en général.
     *
     * Concernant l'implémentation ici : si la validation échoue, le chunk sera désactivé (`render = false`), donc le
     * chunk peut se reposer sur l'interface qu'il a déclaré.
     *
     * Le champ "metadata" des schémas (racine ou nestés) peut contenir les clés suivantes :
     *  - `label` : Proposition de label à afficher dans une UI autogénérée.
     *  - `default` : Proposition de valeur par défaut à utiliser dans une UI autogénérée.
     *     Toute valeur saisie ici ne sera PAS appliquée automatiquement par le système, elle est purement indicative.
     *     Autrement, voyez plutôt {@link BaseDocumentChunk.defaultParameters}.
     *  - `enumLabels`: Map de propositions de labels à afficher pour les valeurs d'une enum dans une UI autogénérée.
     *    Ex. : `{ myEnumValueA: 'My Value A' }` pour le schéma `{ enum: ['myEnumValueA'] }`.
     *  - `inputTypeHint` : Proposition pour la valeur de l'attribut type="" dans une UI autogénérée.
     *  - `fileUrl` : Pour les schémas `{ type: 'string' }` uniquement. Suggère au client de produire un champ
     *    permettant d'uploader un fichier dans un espace cloud temporaire et de renvoyer l'URL du fichier ensuite dans
     *    ce champ. La valeur de la clé indique le type de fichier attendu, selon un format acceptable par l'attribut
     *    [accept] d'un `<input type="file">`.
     */
    readonly parametersJtd: JTDSchemaType<TParameters>;

    /**
     * Paramètres par défaut du chunk, qui seront utilisés si l'utilisateur n'en fournit pas via l'input manifest.
     * Si l'utilisateur fournit ses propres paramètres, cette valeur sera entièrement remplacée (pas de merge).
     */
    readonly defaultParameters: TParameters;

    /**
     * Fonction permettant de créer le chunk selon les paramètres définis par {@link parametersJtd}.
     */
    readonly chunk: (parameters: TParameters) => MaybePromise<DocumentChunk>;
}

/** @see ParametrizedDocumentChunk */
export function isParametrizedChunk<TParameters extends DocumentChunkParameters>(
    chunk: DocumentChunk | ParametrizedDocumentChunk<TParameters>): chunk is ParametrizedDocumentChunk<TParameters> {

    return 'parametersJtd' in chunk;
}

/**
 * Une fonction pass-through qui permet d'inférer automatiquement ou de forcer le type de paramètres d'un
 * {@link ParametrizedDocumentChunk} puisque TypeScript ne peut pas inférer ce générique sans annotation explicite
 * quelque part (le plus proche est l'opérateur "satisfies" que vous pouvez utiliser à la place), à moins de passer par
 * une fonction.
 *
 * @see https://stackoverflow.com/questions/66973498
 *
 * @example Ici le type est inféré depuis `defaultParameters` :
 * withParameters({
 *     parametersJtd: { properties: { param: { type: 'string' } } },
 *     defaultParameters: { param: 'myDefaultValue' },
 *     chunk: (params) => ({ render: () => `My param is ${params.myParam}` }),
 * })
 *
 * @example Ici le type est explicite car il ne pourrait pas être correctement inféré depuis `defaultParameters`  :
 * withParameters<{ maybeParam?: string }>({
 *     parametersJtd: { optionalProperties: { myParam: { type: 'string' } } },
 *     defaultParameters: {},
 *     chunk: (params) => ({ renderDom: () => `My param is ${params.myParam}` }),
 * })
 */
export function withParameters<TParameters extends DocumentChunkParameters>(
    chunk: ParametrizedDocumentChunk<TParameters>): ParametrizedDocumentChunk<TParameters> {

    return chunk;
}

/**
 * Interface décrivant un segment de document.
 * Un chunk peut produire plusieurs pages dans un PDF. Cet objet représente donc une unité de travail et une unité
 * logique de structure qui notamment être utilisée pour générer une table des matières.
 */
export type DocumentChunk =
    | GroupDocumentChunk
    | PdfLibDocumentChunk
    | MergeDocumentChunk
    | PuppeteerDocumentChunk;

/**
 * Interface de base que doit retourner {@link DocumentChunk.properties} en plus d'un des types de l'union
 * {@link DocumentChunk}.
 */
export interface BaseDocumentChunk {
    /**
     * Nom de la page ou de l'ensemble de pages généré. Utile pour le débugage, les retours de progression ou la
     * construction d'une table des matières.
     */
    readonly title: string;

    /**
     * Permet à un chunk de demander à être ignoré du rendu en spécifiant cette propriété à `false` explicitement
     * (`undefined` est interprété comme `true`).
     * À utiliser si les conditions pour un rendu ne sont pas remplies. Dans ce cas il est très recommandé d'émettre un
     * avertissement dans {@link warnings} en plus pour donner du feedback à l'utilisateur.
     * La propriété s'applique aux enfants quand elle est définie sur un {@link GroupDocumentChunk}.
     *
     * @comment update-docs GraphQLInputDocumentChunkManifest.render
     */
    readonly render?: boolean;

    /**
     * Permet la remontée d'avertissements concernant des problèmes de génération.
     */
    readonly warnings?: readonly DocumentChunkWarning[];

    /**
     * Options de pagination.
     */
    readonly paginate?: {
        /**
         * Si vrai, le segment de pages incrémente le compteur de pages (du nombre de pages effectivement produites).
         * La valeur false peut ainsi être utile pour ne pas numéroter les pages de garde si désiré.
         *
         * @default true
         */
        readonly count?: boolean;

        /**
         * Détermine si le numéro de page doit être dessiné par {@link Document.paginate}, si ce callback est
         * défini.
         * Le compteur de pages sera tout de même incrémenté (si {@link count}=false).
         * À noter que {@link draw}=true ne fait pas sens si {@link count}=false et sera donc ignoré dans ce cas.
         *
         * @default true
         */
        readonly draw?: boolean;
    };

    /**
     * Permet d'interagir avec la page PDF-Lib générée une fois qu'elle a été intégrée au document principal.
     * Si la {@link DocumentChunk} a produit plusieurs pages "physiques", ce callback sera appelé pour
     * chacune d'entre elles.
     */
    readonly onPageImported?: (page: pdfLib.PDFPage, pageNumber: number) => MaybePromise<void>;

    /**
     * Permet d'interagir avec les pages PDF-Lib générées une fois qu'elles ont été intégrées au document principal.
     */
    readonly onPagesImported?: (pages: readonly pdfLib.PDFPage[]) => MaybePromise<void>;
}

/** @see DocumentChunk.warnings */
export interface DocumentChunkWarning {
    /**
     * Détermine si le message d'avertissement doit être montré.
     * Permet d'éviter des manipulations systématiques et inélégantes avec l'array
     * {@link DocumentChunk.warnings}. Si non défini, le message sera montré.
     */
    readonly condition?: boolean;

    /**
     * Le message d'avertissement.
     */
    readonly message: string;

    /**
     * Un lien pour corriger le problème, si applicable.
     */
    readonly link?: string;
}

/**
 * Chunk "virtuel" ne provoquant aucun rendu par lui-même, mais permet de grouper logiquement un ensemble de chunks.
 *
 * --- Notes d'implémentation ---
 * Il serait aisé (encore plus qu'avec la solution actuelle) de supporter {@link children} sur tous les types de chunks,
 * donc directement sur {@link BaseDocumentChunk}. Cependant, cela aurait pour effet de rendre la structure du
 * manifeste moins lisible et moins customisable pour l'utilisateur.
 * Par exemple, si {@link PuppeteerDocumentChunk} pouvait avoir des enfants, on pourrait imaginer un tel chunk générer
 * une page de garde avec un titre suivi des pages des enfants. Mais l'utilisateur ne pourrait alors plus désactiver
 * cette page de garde sans désactiver tous les enfants. Il a donc été décidé de limiter la possibilité d'avoir des
 * chunks enfants à un type de chunk qui ne provoque jamais de rendu directement.
 * Néanmoins, les implémentations usant du manifeste (ex. générateur de formulaire d'input manifest) ne *devraient pas*
 * faire cette distinction entre groupe et non groupe, mais considérer que tout chunk peut avoir des enfants.
 */
export interface GroupDocumentChunk extends BaseDocumentChunk {
    readonly kind: 'group';

    /**
     * Liste de chunks "enfants" de ce chunk. Permet de construire une représentation hiérarchique de la structure du
     * document, ce qui est utile pour organiser le code et/ou construire une table des matières dynamique.
     * Les chunks sont ensuite tous étalés séquentiellement dans l'ordre de déclaration, par ex :
     * `{ A, B { C }, D { E { F } } }` est étalé en `{ A, B, C, D, E, F }`.
     */
    readonly children: Readonly<DocumentChunksMap>;
}

/**
 * Commande une (seule) page rendue via PDF-Lib.
 */
export interface PdfLibDocumentChunk extends BaseDocumentChunk {
    readonly kind: 'pdf-lib';

    /**
     * Callback immédiatement appelé par le système, avec une page vierge en argument (il n'est pas possible
     * d'instancier une page sans document, il est donc nécessaire de passer par un callback en déléguant la création de
     * la page au système qui détient l'instance de document PDF).
     *
     * Le numéro de page courant est passé à la fonction et est 1-basé.
     */
    readonly draw: (page: pdfLib.PDFPage, pageNumber: number) => MaybePromise<void>;
}

/**
 * Commande l'intégration de page(s) d'un autre document PDF obtenu d'une source arbitraire (locale ou distante).
 */
export interface MergeDocumentChunk extends BaseDocumentChunk {
    readonly kind: 'merge';

    /**
     * Callback immédiatement appelé par le système, retournant le document dont on doit intégrer les pages et la liste
     * des index des pages à intégrer (si non renseigné, toutes les pages seront copiées).
     */
    readonly load: () => MaybePromise<{
        readonly document: Parameters<(typeof pdfLib.PDFDocument)['load']>[0] | pdfLib.PDFDocument;
        readonly indices?: number[];
    }>;
}

/**
 * Commande un rendu HTML/CSS via Puppeteer.
 *
 * Il est possible de générer plusieurs pages ici, étant donné que vous avez plein contrôle du template, il suffit de
 * laisser le layout "déborder" sur plusieurs pages.
 *
 * Cependant, selon le cas d'usage, il peut être intéressant de générer un {@link PuppeteerDocumentChunk} par
 * page, plutôt que de générer plusieurs pages d'un coup avec un template multi-pages, car vous aurez le contrôle des
 * dimensions et de l'orientation de chaque page indépendamment des autres, ce qui n'est normalement pas possible (ou
 * très bancal) avec CSS.
 */
export interface PuppeteerDocumentChunk extends BaseDocumentChunk {
    readonly kind: 'puppeteer';

    /**
     * Callback immédiatement appelé par le système, retournant le document à rendre.
     * La valeur retournée peut être :
     *  - Un string représentant la source HTML brute,
     *  - Un VNode Preact en utilisant la syntaxe JSX, il sera converti en string HTML.
     *
     * Attention, le document HTML doit être entier, c'est-à-dire que vous devrez mettre un squelette HTML5 complet
     * autour de votre template. Cependant, comme il n'est pas possible de spécifier le DOCTYPE en JSX, le système
     * ajoutera automatiquement le DOCTYPE HTML5 au début du string généré (s'il est manquant d'une source sous forme de
     * string aussi).
     *
     * Le numéro de page courant est passé à la fonction et est 1-basé.
     */
    readonly renderDom: (pageNumber: number) => MaybePromise<string | VNode>;

    /**
     * Options de chargement du contenu de la page.
     * Les options par défaut sont complètement remplacées si vous passez cette propriété.
     *
     * Note : Le chargement des webfonts est toujours attendu par le système de génération, vous n'avez pas à le gérer
     * manuellement. Si aucune webfont n'est utilisée, il n'y aura pas de pénalité d'attente supplémentaire.
     *
     * ! Note : il peut être plus malin d'utiliser {@link onPageLoaded} et une métode puppeteer waitFor*(), plutôt qu'un
     * ! évènement de base comme networkdidle0/2 qui vont imposer und délai minimal même si la page est prête avant, ce
     * ! qui va significativement allonger le temps de génération.
     *
     * @default { waitUntil: 'load' }
     */
    readonly waitForOptions?: puppeteer.WaitForOptions;

    /**
     * Callback appelé après que {@link puppeteer.Page.setContent} ait été appelé et que les webfonts ont été chargées
     * (voir {@link waitForOptions}), et juste avant la conversion en PDF.
     * Permet d'interagir avec la page, ou encore par exemple d'utiliser une méthode page.waitFor*() pour un contrôle
     * plus fin de l'attente, etc.
     */
    readonly onPageLoaded?: (page: puppeteer.Page) => MaybePromise<void>;

    /**
     * Options de génération du PDF.
     * Les options par défaut sont complètement remplacées si vous passez cette propriété.
     *
     * @default { format: 'a4', printBackground: true }
     */
    readonly pdfOptions?: puppeteer.PDFOptions;
}

/**
 * Objet dans lequel est finalement résolu un {@link DocumentChunk} pour la génération du manifeste et/ou du document,
 * ses propriétés sont fixées et il est attaché dans la hiérarchie du document.
 */
export interface ResolvedDocumentChunk<TChunk extends DocumentChunk = DocumentChunk>
    extends Omit<OutputDocumentChunkManifest, 'parent'> {

    /**
     * Parent direct de ce chunk.
     */
    readonly parent: ResolvedDocumentChunk | undefined;

    /**
     * Liste des parents de ce chunk.
     * Ordonné avec les parents les plus anciens en premier (ex. chunk racine en [0]).
     */
    readonly parents: readonly ResolvedDocumentChunk[];

    /**
     * Chunk résolu : soit le {@link DocumentChunk} original soit le résultat de {@link ParametrizedDocumentChunk.chunk}
     * après application des paramètres.
     * La valeur runtime contient le chunk original, mais le type expose seulement les propriétés intéressantes,
     * l'implémentation de rendu spécifique, les autres propriétés de {@link BaseDocumentChunk} étant résolues dans cet
     * objet.
     */
    readonly impl: Omit<TChunk, keyof BaseDocumentChunk>;

    readonly paginate: { count: boolean, draw: boolean };

    readonly onPageImported: BaseDocumentChunk['onPageImported'];

    readonly onPagesImported: BaseDocumentChunk['onPagesImported'];
}
