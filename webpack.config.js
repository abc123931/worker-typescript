const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist"),
  },
  target: "webworker",
  devtool: "cheap-module-source-map",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@prisma/client$": require.resolve("@prisma/client"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};