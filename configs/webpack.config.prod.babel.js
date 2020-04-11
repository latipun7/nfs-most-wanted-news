import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { srcDir, globalStyleDir, componentsDir } from './paths';
import {
  commonWebpackConfig,
  commonProdScssLoader,
} from './webpack.config.babel';

export default merge(commonWebpackConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    filename: 'scripts/[name].[hash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
      chunkFilename: 'styles/[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleDir],
        use: [MiniCssExtractPlugin.loader, ...commonProdScssLoader],
      },
      {
        test: /\.s[ac]ss$/,
        include: [componentsDir],
        use: [...commonProdScssLoader],
      },
      {
        test: /\.js$/,
        include: [srcDir],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
});
