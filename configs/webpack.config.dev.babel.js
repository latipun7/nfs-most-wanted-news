import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { globalStyleDir, componentsDir } from './paths';
import {
  commonWebpackConfig,
  commonDevScssLoader,
} from './webpack.config.babel';

export default merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'scripts/[name].js',
  },
  devServer: {
    open: true,
    hot: true,
    overlay: { errors: true, warnings: true },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleDir],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true },
          },
          ...commonDevScssLoader,
        ],
      },
      {
        test: /\.s[ac]ss$/,
        include: [componentsDir],
        use: [...commonDevScssLoader],
      },
    ],
  },
});
