import { OutputDocumentManifest } from '@mydecocloud/interfaces/documents';

/**
 * A class taking a document data Buffer as an input and is responsible for making a document available for download
 * through a http(s) URL.
 * Whether the URL is permanent or temporary depends on your use case, myDecoCloud does not store the resulting document
 * so that is up to you if you want to keep them.
 */
export abstract class DocumentStorage {
    /**
     * Stores a document and returns a public URL to download it.
     *
     * @param manifest Output manifest, the typical use case is to retrieve the title from it to use it as the file
     *                 name (do not forget to make it safe for URL and/or filesystem use), through
     *                 {@link OutputDocumentManifest.title}, but you can also use any other field.
     * @param data     The document file data.
     */
    public abstract store(manifest: OutputDocumentManifest, data: Buffer): Promise<string>;
}
