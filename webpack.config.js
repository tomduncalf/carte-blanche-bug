var webpack = require('webpack');
var path = require('path');
var CarteBlanche = require('carte-blanche');

var SRC_DIR = path.join(__dirname, 'src');
var BUILD_DIR = path.join(__dirname, 'static');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
     path.join(SRC_DIR, 'index.jsx'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: SRC_DIR,
      }
  ]},
  output: {
    filename: 'index.js',
    path: BUILD_DIR,
    publicPath: '/static/',
  },
  resolve: {
    modulesDirectories: [SRC_DIR, 'node_modules'],
    extensions: ['', '.jsx', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __PRODUCTION__: false,
    }),
    new CarteBlanche({
      componentRoot: './src/components'
    })
  ]
};
