// ! Keep variables in sync with lib-print.scss

import * as puppeteer from 'puppeteer';

export const pageMarginMinimal = '.25in';

export const pageMarginNormal = '1cm';

export const pageMarginsMinimal: puppeteer.PDFMargin = {
    top: pageMarginMinimal,
    right: pageMarginMinimal,
    bottom: pageMarginMinimal,
    left: pageMarginMinimal,
};

export const pageMarginsNormal: puppeteer.PDFMargin = {
    top: pageMarginNormal,
    right: pageMarginNormal,
    bottom: pageMarginNormal,
    left: pageMarginNormal,
};
