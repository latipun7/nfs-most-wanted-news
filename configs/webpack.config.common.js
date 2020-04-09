const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    new MiniCssExtractPlugin({
      filename: 'styles/index.css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
