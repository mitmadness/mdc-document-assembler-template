import { Glob } from 'glob';
import watch from 'node-watch';
import { access, constants as fsConstants, copyFile as fsCopyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

// Clear existing SCSS files in dist/ to start
await clearDistScssFiles();
// Then copy all existing files from src/ to dist/
await copyAllScssFilesToDist();

console.log('Copied src/**/*.scss files to dist/');

// And watch the updates to these files if needed
if (process.argv.includes('--watch')) {
    watchAndCopyScssFilesToDist();
}

async function clearDistScssFiles() {
    const glob = new Glob('dist/**/*.scss', {});

    for await (const path of glob) {
        await rm(path);
    }
}

async function copyAllScssFilesToDist() {
    const scssSourceGlob = new Glob('src/**/*.scss', {});

    for await (const sourcePath of scssSourceGlob) {
        await copyFile(sourcePath);
    }
}

function watchAndCopyScssFilesToDist() {
    watch(
        './src',
        { filter: /\.scss$/, recursive: true },
        async (eventType, path) => {
            if (eventType === 'update') {
                await copyFile(path);

                console.log(`Updated ${getDestPath(path)}`);
            }
            if (eventType === 'remove') {
                await rm(getDestPath(path));

                console.log(`Removed ${getDestPath(path)}`);
            }
        });
}

async function copyFile(sourcePath) {
    const destPath = getDestPath(sourcePath);

    const destDirname = path.dirname(destPath);

    try {
        await access(destDirname, fsConstants.R_OK)
    } catch {
        await mkdir(destDirname, { recursive: true });
    }

    await fsCopyFile(sourcePath, destPath);
}

function getDestPath(sourcePath) {
    return path.join('dist', sourcePath);
}
