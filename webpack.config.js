const path = require('path');
const devtool = 'source-map';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  devtool,
  entry: path.resolve(__dirname, 'gem-puzzle', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/i,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'gem-puzzle', 'index.html')
    }),
    new MiniCssExtractPlugin({
    })
  ],
 }