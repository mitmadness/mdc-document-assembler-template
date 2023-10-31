/**
 * Exposes utility functions for working with PostScript points (pt), pixels (px) and inches (in).
 */

export const pixelsPerInch = 96;

export const pointsPerInch = 72;

export const centimetersPerInch = 2.54;

export function inToPt(inches: number): number {
    return inches * pointsPerInch;
}

export function ptToIn(points: number): number {
    return points / pointsPerInch;
}

export function inToPx(inches: number): number {
    return inches * pixelsPerInch;
}

export function pxToIn(pixels: number): number {
    return pixels / pixelsPerInch;
}

export function ptToPx(points: number): number {
    return points * pixelsPerInch / pointsPerInch;
}

export function pxToPt(pixels: number): number {
    return pixels * pointsPerInch / pixelsPerInch;
}

/**
 * Depuis un tuple [width, height] en points, typique de l'objet PageSizes de PDF-Lib, retourne un objet qui décrit
 * cette taille en pixels, dans un format compatible avec l'interface PDFOptions de Puppeteer (cela peut être utilisé à
 * d'autres fins bien-sûr, il s'agit juste d'une conversion d'unités et de format d'objet).
 *
 * ! Attention : Puppeteer a tendance à générer une page dont la taille physique très légèrement différente de la taille
 * ! demandée. Si cela pose problème il est possible de faire un page.setSize() dans un DocumentChunk.onPageImported.
 *
 * @param pageSizeInPoints Taille de la page en points (utiliser PageSizes de PDF-Lib)
 * @param landscape        Si vrai, inverse largeur et hauteur. Utile quand on travaille avec PageSizes dont les tuples
 *                         représentent les dimensions en portrait.
 */
export function getPageSizeInPixels(
    pageSizeInPoints: [number, number],
    landscape = false): { width: number, height: number } {

    const [width, height] = landscape ? [pageSizeInPoints[1], pageSizeInPoints[0]] : pageSizeInPoints;

    return { width: ptToPx(width), height: ptToPx(height) };
}
