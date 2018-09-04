const nodeExternals = require('webpack-node-externals');
const {ReactLoadablePlugin} = require('react-loadable/webpack');
const path = require('path');

const serverConfig = {
  entry: ['babel-polyfill', './src/server/index.js'],
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('./'),
    filename: 'index.js',
  },
  module: {
    rules: [{test: /\.js$|\.jsx$/, use: 'babel-loader'}],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './public/react-loadable.json',
    }),
  ],
};

module.exports = serverConfig;
