module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['ruppy-node'],
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
      webpack: {
        config: './configs/webpack.config.dev.babel.js',
        'config-index': 1,
      },
    },
  },
};
