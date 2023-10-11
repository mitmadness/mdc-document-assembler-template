import logger from '@mitm/logger';
import express, { NextFunction, Request, Response } from 'express';
import config from './config.js';
import documentsRouter from './documents-router.js';

export async function boot(): Promise<void> {
    const app = express();

    app.use(logger.getMorganMiddleware(config.nodeEnv == 'development'));

    // Accept huge JSON payloads from myDecoCloud Scrapper, document input manifests.
    // They can notably contain base64-encoded images.
    app.use(express.json({ limit: '1mb' }));

    app.use(documentsRouter);

    app.use(nonFatalErrorHandler);
    app.use(fatalErrorHandler);

    app.listen(config.port, () => logger.default.info(`🌍 Up and running on port ${config.port}`));
}

/**
 * Handles non-fatal errors in upstream express request handlers.
 * ! Note: keep the 4 parameters as-is, otherwise express won't recognize this as an error handler.
 */
function nonFatalErrorHandler(err: unknown, _req: Request, res: Response, next: NextFunction) {
    if (err instanceof Error && err.name == 'PayloadTooLargeError') {
        type PayloadTooLargeError = Error & { expected: number, length: number, limit: string };

        const { expected, length, limit } = err as PayloadTooLargeError;

        res.status(413).json({
            error: true,
            message: `Payload too large, got ${length || expected} bytes, limit is ${limit} bytes.`,
            expected, length, limit
        });
    }
    else {
        // We don't know what this error is, pass to the next error handler.
        next(err);
    }
}

/**
 * Handles fatal errors in upstream express request handlers.
 * Since we don't know what the error is at this point, we don't know what state we're in so we rethrow the error after
 * attempting to send a 500 response.
 * ! Note: keep the 4 parameters as-is, otherwise express won't recognize this as an error handler.
 */
function fatalErrorHandler(err: unknown, req: Request, res: Response, _next: NextFunction) {
    // We send a 500 response if we haven't sent a response yet.
    if (!res.headersSent) {
        // We don't know what this error is, return a 500 error and rethrow.
        res.status(500).json({
            error: true,
            message: err instanceof Error ? err.message : String(err),
        });
    }

    logger.default.error(`Fatal error in express request handler (${req.method} ${req.originalUrl}), will rethrow.`);

    // Rethrow in global context because Express likes to catch errors and just print them to the console.
    // We want them to bubble up to the global error handler.
    void Promise.reject(err);
}
