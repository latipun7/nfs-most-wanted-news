import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import { buildDir, configsDir, libDir, publicDir } from './paths';

/**
 * @type {import('webpack').Configuration} WebpackConfiguration
 */
const commonWebpackConfig = {
  entry: './src/index.js',
  output: {
    path: buildDir,
  },
  resolve: {
    modules: ['node_modules', libDir, configsDir],
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
      cache: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
        },
      },
    ],
  },
};

/**
 * @param {('dev'|'prod')} env - environment variable
 * @param {Boolean} [raw] - cast css to string
 * @returns {Array} style loaders array
 */
const styleLoaders = (env, raw) => {
  const dev = env === 'dev';
  const loaderOrder = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { esModule: true, hmr: dev },
    },
    {
      loader: 'css-loader',
      options: { sourceMap: dev, importLoaders: 3 },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: dev,
        ident: 'postcss',
        plugins: () => [postcssPresetEnv()],
      },
    },
    {
      loader: 'resolve-url-loader',
      options: { sourceMap: dev },
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: true },
    },
  ];

  if (raw) loaderOrder.splice(0, 1, 'to-string-loader');

  return loaderOrder;
};

export { commonWebpackConfig, styleLoaders };
