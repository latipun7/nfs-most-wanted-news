const path = require('path');

const root = path.resolve(__dirname, '..');

/**
 * Resolve paths
 * @param {String} relativePath - path relative to root directory
 */
const resolveDir = (relativePath) => path.resolve(root, relativePath);

/**
 * Resolved paths.
 */
module.exports = {
  rootDir: resolveDir('.'),
  buildDir: resolveDir('dist'),
  publicDir: resolveDir('public'),
  srcDir: resolveDir('src'),
};
