const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const serverConfig = {
  entry: './src/server/index.js',
  mode: 'development',

  target: 'node',
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   dns: 'empty',
  // },
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },
  module: {
    rules: [{test: /\.js$|\.jsx$/, use: 'babel-loader'}],
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     __isBrowser__: 'false',
  //   }),
  // ],
};

module.exports = serverConfig;
