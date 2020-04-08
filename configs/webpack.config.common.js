const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { buildDir, publicDir } = require('./paths');

/**
 * @type {import('webpack').Configuration} WebpackConfiguration
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'scripts/bundle.js',
    path: buildDir,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: publicDir,
        to: buildDir,
        ignore: ['index.html'],
      },
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
