import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { buildDir, publicDir } from './paths';

/**
 * @type {import('webpack').Configuration} WebpackConfiguration
 */
const commonWebpackConfig = {
  entry: './src/index.js',
  output: {
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
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],
};

const commonDevScssLoader = [
  {
    loader: 'css-loader',
    options: { sourceMap: true },
  },
  'resolve-url-loader',
  {
    loader: 'sass-loader',
    options: { sourceMap: true },
  },
];

const commonProdScssLoader = [
  'css-loader',
  'resolve-url-loader',
  {
    loader: 'sass-loader',
    options: { sourceMap: true },
  },
];

export { commonWebpackConfig, commonDevScssLoader, commonProdScssLoader };
