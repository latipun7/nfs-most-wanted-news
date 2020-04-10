import path from 'path';

const root = path.resolve(__dirname, '..');

/**
 * Resolve paths
 * @param {String} relativePath - path relative to root directory
 * @returns {String} resolved path string
 */
const resolveDir = (relativePath) => path.resolve(root, relativePath);

// Resolved paths ...
const rootDir = resolveDir('.');
const buildDir = resolveDir('dist');
const publicDir = resolveDir('public');
const srcDir = resolveDir('src');
const globalStyleDir = resolveDir('src/styles');
const componentsDir = resolveDir('src/components');

export { rootDir, buildDir, publicDir, srcDir, globalStyleDir, componentsDir };
