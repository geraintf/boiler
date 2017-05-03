var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Page Title',
    template: path.join(__dirname, 'src/index-template.ejs'),
    cache: true
  })]
};