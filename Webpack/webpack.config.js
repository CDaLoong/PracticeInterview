const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// 导出配置文件
module.exports = {
    mode: "production", // development：开发环境  production：生产环境
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map", // 是否记录所有源码内容，和转换后的代码的对应关系
    watch: true, // 监控用户操作，代码改变重新打包
    plugins: [new CleanWebpackPlugin(), new WebpackBundleAnalyzer()]
}
