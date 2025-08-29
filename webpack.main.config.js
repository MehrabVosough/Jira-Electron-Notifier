const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
    }),
  ],
  mode: "development",
  entry: {
    main: "./src/main/main.ts",
    preload: "./src/main/preload.ts",
  },
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
