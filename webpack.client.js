const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "client/index.tsx"),
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html",
    }),
  ],
};
