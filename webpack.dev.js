const path = require("path");
const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common")


module.exports = merge(commonConfig, {
  devtool: "inline-source-map", 
  mode: "development",
  devServer: {
    static: './dist',
  },
}) 
