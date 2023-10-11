import defaultLogger from '@mitm/logger';
import * as puppeteer from 'puppeteer';

let currentBrowser: puppeteer.Browser | undefined;

type Logger = {
    [Level in 'debug' | 'verbose' | 'log' | 'warning' | 'error']: (message: string, ...args: unknown[]) => void
};

/**
 * Gets the current global browser instance.
 */
export async function getBrowser(logger: Logger = defaultLogger.default): Promise<puppeteer.Browser> {
    if (!currentBrowser?.connected) {
        currentBrowser = await puppeteer.launch();
    }

    logger.debug(`puppeteer: browser is connected: ${await currentBrowser.version()}`,);

    return currentBrowser;
}

/**
 * Creates a Puppeteer page with basic logging & window.console redirection.
 */
export async function getNewPage(logger: Logger = defaultLogger.default): Promise<puppeteer.Page> {
    // For each console.log-kind call on a puppeteer page, what logging function should be used. Will default to debug.
    const consoleLogTypeToLoggerFn = new Map<puppeteer.ConsoleMessageType, Logger[keyof Logger]>([
        ['verbose', logger.verbose],
        ['log', logger.verbose],
        ['warning', logger.warning],
        ['error', logger.error]
    ]);

    const browser = await getBrowser();

    const page = await browser.newPage();

    page.on('error', error => logger.error(`puppeteer: Page crashed`, error));
    page.on('pageerror', error => logger.error(`puppeteer: page unhandled error`, error));
    page.on('requestfailed', request => logger.error(`puppeteer: page request failed`, request.url()));

    page.on('console', message => {
        const logFn = consoleLogTypeToLoggerFn.get(message.type()) ?? logger.debug;

        logFn(`puppeteer: page console.${message.type()}(): ${message.text()}`);
    });

    return page;
}
