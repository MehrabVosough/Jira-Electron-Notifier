const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main/main.ts",
    preload: "./src/main/preload.ts", // ← اضافه شد
  },
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // main.js و preload.js ساخته میشه
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
