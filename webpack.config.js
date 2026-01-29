const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "source-map",

  devServer: {
  static: path.resolve(__dirname, "public"),
  port: 3000,
  open: true,
  hot: true,
 },

  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // IMMAGINI
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
