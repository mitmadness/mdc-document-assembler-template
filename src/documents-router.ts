import logger from '@mitm/logger';
import { InputDocumentManifest } from '@mydecocloud/interfaces/documents';
import betterSse from 'better-sse';
import express, { Request, RequestHandler, Response, Router } from 'express';
import * as fs from 'fs-extra';
import * as os from 'node:os';
import * as path from 'node:path';
import { EMPTY } from 'rxjs';
import { DocumentAssembler, DocumentGeneratorFn, FileSystemStorage } from '../mydecocloud/document-assembler/index.js';
import config from './config.js';
import { generateScrapperReport } from './documents/index.js';
import { defaultRegistry } from './intl/index.js';

const documentsOutputPath = path.join(os.tmpdir(), 'document-assembler');

const assembler = new DocumentAssembler({
    localesRegistry: defaultRegistry,
    documentStorage: new FileSystemStorage({
        path: documentsOutputPath,
        baseUrl: '/files',
        maxAge: 60 * 60 * 1000 // 1 hour
    })
});

const router = Router();

export default router;

// Create scrapper report endpoint, called by myDecoCloud
router.post('/generate/scrapper-report', documentGeneratorHandler('scrapper-report', generateScrapperReport));

// Serve generated documents stored by FileSystemStorage
router.use('/files', express.static(documentsOutputPath, { index: false }));

function documentGeneratorHandler<TDocumentName extends InputDocumentManifest['document']>(
    documentName: TDocumentName,
    generator: DocumentGeneratorFn<TDocumentName>):
    RequestHandler<unknown, unknown, InputDocumentManifest<TDocumentName>> {

    // Express does not support async request handlers, so wrap our handler in a function that catches errors and
    // forwards them to the error handler middleware.
    return (req, res, next) => handle(req, res).catch(next);

    async function handle(req: Request<unknown, unknown, InputDocumentManifest<TDocumentName>>, res: Response) {
        // We first check the document type
        if (req.body.document != documentName) {
            res.status(400);
            res.send({ error: true, message: 'Invalid document type.' });
            return;
        }

        // We write the manifest to a file for debugging purposes, useful to retrieve it and use it into Postman for
        // example, so we do not need to test against myDecoCloud all the time.
        if (config.nodeEnv == 'development') {
            await fs.outputFile('logs/received-manifest.json', JSON.stringify(req.body));
        }

        // Initialize the SSE session, that we will use to emit events from the assembler
        const sseSession = await betterSse.createSession(req, res);

        // Generate the document and send the generation events as SSE events
        assembler.generate(req.body, generator).subscribe({
            next: event => {
                const { kind, ...data } = event;

                sseSession.push(data, kind);

                if (event.kind == 'document') {
                    logger.default.info(`Generated document ${event.documentUrl}`);
                }
            },
            error: err => {
                // Errors in this case are also emitted as events, so they are already sent to the client in the `next`
                // callback above.
                // So here we just make sure to log the error and that the server doesn't crash.
                logger.default.error(`Error generating document of type ${documentName}`);
                console.error(err);

                return EMPTY;
            }
        });
    }
}
