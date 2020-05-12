import purgeCss from '@fullhuman/postcss-purgecss';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import cssnano from 'cssnano';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import WorkboxPlugin from 'workbox-webpack-plugin';
import { buildDir, configsDir, libDir, publicDir, srcDir } from './paths';

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
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 2097152 * 7,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://newsapi.ruppy.io'),
          handler: 'NetworkFirst',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/',
          name: '[contenthash:16].[ext]',
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
  const isDev = env === 'dev';
  const loaderOrder = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { esModule: true, hmr: isDev },
    },
    {
      loader: 'css-loader',
      options: { sourceMap: isDev, importLoaders: 3 },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: isDev,
        ident: 'postcss',
        plugins: () => [
          postcssPresetEnv(),
          cssnano({
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                convertValues: { precision: 2 },
              },
            ],
          }),
          ...(!isDev
            ? [
                purgeCss({
                  content: [`${srcDir}/**/*.js`],
                  defaultExtractor: (content) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
                  whitelist: ['html'],
                  whitelistPatterns: [/^::-webkit-scrollbar/],
                }),
              ]
            : []),
        ],
      },
    },
    {
      loader: 'resolve-url-loader',
      options: { sourceMap: isDev },
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
