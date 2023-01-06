const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("dotenv").config({ path: "./.env" });
const PACKAGE = require("./package.json");
const PREFFIX = "process.env.";
const JS_FILE_NAME = "background";
const CSS_FILE_NAME = "style";

module.exports = {
  mode: "production",
  entry: {
    [JS_FILE_NAME]: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: CSS_FILE_NAME + ".css",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "manifest.template.json"),
          to: path.resolve(__dirname, "./build/manifest.json"),
          transform: function (content) {
            var string = content.toString();
            string = string.replace(
              PREFFIX + "GITLAB_URL",
              process.env.GITLAB_URL
            );
            string = string.replace(PREFFIX + "APP_VERSION", PACKAGE.version);
            string = string.replace(
              PREFFIX + "DESCRIPTION",
              PACKAGE.description
            );
            string = string.replace(PREFFIX + "AUTHOR", PACKAGE.author);
            string = string.replace(PREFFIX + "JS_FILE_NAME", JS_FILE_NAME);
            string = string.replace(PREFFIX + "CSS_FILE_NAME", CSS_FILE_NAME);
            return string;
          },
        },
      ],
    }),
  ],
};
