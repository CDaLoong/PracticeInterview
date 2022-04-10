// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.scss$/, use: ["style-loader", "css-loader?modules", "sass-loader"] }, // 匹配 scss 文件，先让 scss-loader 处理，再让 css-loader 处理，再让 style-loader 处理, sass-loader 是 css 预编译器 sass 提供的 loader，使用一种更加优雅的方式来书写样式代码，通过一个编译器，将其转换为可被浏览器识别的传统css代码
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}