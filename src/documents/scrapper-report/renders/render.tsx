import { PageSizes } from 'pdf-lib';
import { DocumentChunk } from '../../../../mydecocloud/document-assembler/index.js';
import { importScss } from '../../../scss.js';
import { getPageSizeInPixels } from '../../units.js';
import { Page } from '../page.js';

const style = importScss(import.meta, 'render.scss');

export function create(
    logoSrc: string,
    typeName: string,
    typeIndex: number,
    renderSrc: string): DocumentChunk {

    return {
        kind: 'puppeteer',
        // Sur la ligne suivante, on remplace le '/' par un espace pour éviter que le système ne s'étouffe sur ce
        // caractère. Si on ne fait pas ça, on arrive pas à assembler le document, car le '/' représente un "dossier"
        // dans l'arborescence.
        title: `${typeName.replace('/', ' ')} #${typeIndex + 1}`,
        pdfOptions: getPageSizeInPixels(PageSizes.A4, true),
        renderDom: () =>
            <Page styles={[style]} logoSrc={logoSrc} title={<h2>{typeName}</h2>}>
                <div class="render" style={{ backgroundImage: `url("${renderSrc}")` }}></div>
            </Page>
    };
}
