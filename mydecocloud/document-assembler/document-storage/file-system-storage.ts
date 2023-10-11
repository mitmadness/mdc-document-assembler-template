import { OutputDocumentManifest } from '@mydecocloud/interfaces/documents';
import fs from 'fs-extra';
import path from 'node:path';
import { DocumentStorage } from './document-storage.js';
import getSlug from 'speakingurl';

/** @see FileSystemStorage */
interface FileSystemStorageOptions {
    /**
     * How much time in milliseconds the generated document should be kept available (minimum time).
     * Use {@link Infinity} to keep the documents available forever.
     */
    readonly maxAge: number;

    /**
     * The base URL used for serving documents.
     * Ex.
     *  - for a file with path `/tmp/document-assembler/abcdef/doc.pdf`
     *  - with a base URL of `(https://example.com)/documents`
     *  - the returned URL will be `(https://example.com)/documents/abcdef/doc.pdf`.
     *
     * If you don't provide an absolute URL, myDecoCloud will treat the path as a relative path to the domain it
     * queried to call your generator.
     */
    readonly baseUrl: string;

    /**
     * The absolute or cwd-relative path to the directory where documents should be stored.
     * The directory will be created if it doesn't exist, given that the application has the required permissions.
     *
     * @example
     * import * as os from 'node:os';
     * import * as path from 'node:path';
     *
     * const path = path.join(os.tmpdir(), 'document-assembler');
     * // On Linux, path = /tmp/document-assembler
     * // On Windows, path = C:\Users\You\AppData\Local\Temp\document-assembler
     */
    readonly path: string;
}

/**
 * An implementation that stores documents as files in the filesystem.
 */
export class FileSystemStorage extends DocumentStorage {
    private lastFilesCleanupDate = new Date();

    public constructor(private readonly options: FileSystemStorageOptions) {
        super();
    }

    /**
     * Stores a document on the file system and returns the public path/URL to download it.
     */
    public override async store({ title, locale }: OutputDocumentManifest, document: Buffer): Promise<string> {
        const dirName = await this.getUniqueDirectoryName();

        // Get a clean file name
        const titleSlug = getSlug(title, {
            lang: locale?.split('-')[0]
        });
        const fileName = `${titleSlug}.pdf`;

        await fs.outputFile(path.join(this.options.path, dirName, fileName), document);

        // Do not await it, we don't want to block the caller, neither we want an eventual error in this method to
        // bubble up to the caller.
        void this.housekeeping();

        return ['', this.options.baseUrl, dirName, fileName].join('/').replaceAll(/\/+/g, '/');
    }

    /**
     * Returns a unique directory name to store the document in.
     * This allows to avoid file collisions if storing multiple documents of the same name.
     * Using a directory allows to serve the files directly through a static file server and avoid needing the file name
     * to have that unique code that as a suffix/prefix (ex. "/abcdef/doc.pdf" instead of "/abcdef-doc.pdf").
     * You may override this method to replace it with your own unique directory name generation logic.
     */
    protected getUniqueDirectoryName(): Promise<string> {
        return Promise.resolve(Date.now().toString());
    }

    /**
     * Removes old files from the storage directory, according to {@link FileSystemStorageOptions.maxAge}.
     * Executes after each call to {@link store}, unless it was already executed less than 120 seconds ago.
     * You may override this method to replace or patch with your own housekeeping logic.
     */
    protected async housekeeping(): Promise<void> {
        if (this.options.maxAge == Infinity) {
            return;
        }

        if (this.lastFilesCleanupDate.getTime() + 120_000 > Date.now()) {
            return;
        }

        this.lastFilesCleanupDate = new Date();

        await fs.ensureDir(this.options.path);

        const entries = await fs.readdir(this.options.path, { withFileTypes: true, recursive: true });

        for (const entry of entries) {
            if (!entry.isFile()) {
                continue;
            }

            const { birthtime } = await fs.stat(path.join(entry.path, entry.name));

            if (birthtime.getTime() + this.options.maxAge < Date.now()) {
                // Remove the DIRECTORY for the file as we have one dir per file and one file per dir.
                await fs.remove(entry.path);
            }
        }
    }
}
