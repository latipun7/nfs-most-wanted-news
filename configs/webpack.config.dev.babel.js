import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';
import { componentsDir, globalStyleDir } from './paths';
import { commonWebpackConfig, styleLoaders } from './webpack.config.babel';

export default merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].[id].js',
  },
  devServer: {
    open: true,
    hot: true,
    overlay: { errors: true, warnings: true },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleDir],
        use: styleLoaders('dev'),
      },
      {
        test: /\.s[ac]ss$/,
        include: [componentsDir],
        use: styleLoaders('dev', true),
      },
    ],
  },
});
