const { environment } = require('@rails/webpacker');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { resolve } = require('path');
const vue = require('./loaders/vue');

environment.plugins.append(
  'html',
  new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    template: resolve('app', 'javascript', 'index.html'),
  })
);

environment.plugins.append('html-harddisk', new HtmlWebpackHarddiskPlugin());

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin());
environment.loaders.prepend('vue', vue);
module.exports = environment;
