const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
    watchFiles: ["./src/template.html"],
    hot: true,
    port: 3000,
    open: true,
  },
});
