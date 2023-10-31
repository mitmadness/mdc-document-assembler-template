import { ensureNonNull } from '@mitm/common';
import { Cart } from '@mydecocloud/interfaces/scrapper';
import { DocumentChunk, DocumentChunksMap } from '../../../../mydecocloud/document-assembler/index.js';
import * as renderChunk from './render.js';

const renders: ReadonlyArray<{ typeName: string, path: string, match: string }> = [
    { typeName: `Terrain`, path: 'terrain', match: 'terrain' },
    { typeName: `Plans`, path: 'floor-plan', match: 'floorPlan' },
    { typeName: `Vue 3D des étages`, path: 'world-screenshot', match: 'WorldScreenshot' },
    { typeName: `Vue de coupe/Élévation`, path: 'marker-screenshot', match: 'MarkerScreenshot' },
    { typeName: `Insertion`, path: 'inlay-screenshot', match: 'InlayScreenshot' },
    { typeName: `Studio photos`, path: 'summary-screenshot', match: 'SummaryScreenshot' },
    { typeName: `Vue d'implémentation`, path: 'measures-screenshot', match: 'MeasuresScreenshot' }
];

export function create(cart: Cart, logoSrc: string): DocumentChunk {
    const pictures = ensureNonNull(cart.pictures);

    return {
        kind: 'group',
        title: 'Rendus',
        children: renders
            .flatMap(render => pictures
                .filter(picture => picture.name.startsWith(render.match))
                .map((picture, pictureIndex) => ({
                    ...render,
                    pictureIndex,
                    pictureName: picture.name,
                    pictureDataUri: picture.fileContent
                })))
            .reduce<DocumentChunksMap>((map, render) => ({
                ...map,
                [`${render.path}-${render.pictureIndex}`]: renderChunk.create(
                    logoSrc, render.typeName, render.pictureIndex, render.pictureDataUri)
            }), {})
    };
}
