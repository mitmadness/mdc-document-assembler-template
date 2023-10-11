import { Document, DocumentParameters } from '../../../mydecocloud/document-assembler/index.js';

export function generateScrapperReport(_: DocumentParameters<'scrapper-report'>): Document {
    return {
        fallbackTitle: 'Scrapper report example',
        chunks: {
            'hello-world': {
                kind: 'puppeteer',
                title: 'Hello world',
                renderDom: () => `Hello world!`
            }
        }
    }
}
