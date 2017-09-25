'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:`${__dirname}/src/main.js`,
  outpost: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicpath: '/',
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html`}),
    new ExtractTextPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node.modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
