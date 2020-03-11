const webpack = require("webpack");
const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: "./app/client/home.js",
    vip: "./app/client/vip.js",
    search: "./app/client/search.js"
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
