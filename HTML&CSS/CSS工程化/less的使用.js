// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

// less 的使用, 具体的使用见文档：https://less.bootcss.com/
// 变量
// 混合
// 嵌套
// 运算
// 函数
// 作用域
// 注释
// 导入

module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.less$/, use: ["style-loader", "css-loader?modules", "less-loader"] }, // 匹配 less 文件，先让 less-loader 处理，再让 css-loader 处理，再让 style-loader 处理, less-loader 是 css 预编译器 less 提供的 loader，使用一种更加优雅的方式来书写样式代码，通过一个编译器，将其转换为可被浏览器识别的传统css代码
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