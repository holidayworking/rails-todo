const { webpackConfig, mergeWithRules } = require('@rails/webpacker');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      exclude: 'replace',
      type: 'match',
    },
  },
})(webpackConfig, {
  module: {
    rules: [
      {
        test: [/\.html$/],
        exclude: [/\.(js|mjs|jsx|ts|tsx|vue\.html)$/],
        type: 'asset/source',
      },
      {
        test: /\.vue$/,
        use: { loader: 'vue-loader' },
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  plugins: [
    new ForkTSCheckerWebpackPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: path.resolve('app', 'packs', 'index.ejs'),
    }),
    new VueLoaderPlugin(),
  ],
});
