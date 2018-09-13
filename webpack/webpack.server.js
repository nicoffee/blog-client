const nodeExternals = require('webpack-node-externals');
const path = require('path');

const serverConfig = {
  entry: ['babel-polyfill', './src/server/index.js'],
  output: {
    path: path.resolve('./'),
    filename: 'index.js',
    publicPath: '/',
  },
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{test: /\.js$|\.jsx$/, use: 'babel-loader'}],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = serverConfig;
