import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { compile } from 'sass';

/**
 * Compiles an SCSS file and returns the compiled CSS string
 *
 * @param importMeta `import.meta`
 * @param scssRelativePath
 *
 * @example
 *  const style = importScss(import.meta, 'style.scss');
 */
export function importScss(importMeta: ImportMeta, scssRelativePath: string): string {
    const scssPath = join(dirname(fileURLToPath(importMeta.url)), scssRelativePath);

    return compile(scssPath).css;
}
