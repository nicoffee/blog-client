const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: ['./public', path.resolve(__dirname, 'assets')],
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.NamedModulesPlugin()],
});
