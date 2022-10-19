const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name].[chunkhash:5].js"
    },
    plugins: [
        new CleanWebpackPlugin(), // 生成导出文件之前先清除输出目录，利用 fs 模块清除输出目录的文件
        new HtmlWebpackPlugin({ // 自动生成页面文件，利用 fs 模块生成一个页面文件，给文件内容的合适的位置添加一个 script 元素，元素的src 路径引用打包后的 js，默认有几个 js 生成几个 script 标签，如果配置了 chunks，则只生成对应的 js 引用，关于配置，去看文档
            template: "./public/index.html", // html 文件使用的模板
            filename: "home.html", // 文件名
            chunks: ["home"] // 使用哪个 chunks 打包出来的 js，chunks 就是某个入口文件打包出来的东西
        }),
        new HtmlWebpackPlugin({ // 可以多来几个
            template: "./public/index.html",
            filename: "a.html",
            chunks: ["a"]
        }),
        new CopyPlugin([ // 复制静态文件，常用来复制图片、图标等
            { from: "./public", to: "./" } // 每个对象都是一个复制规则，从哪个地方复制到哪个地方 form: source, to: target, 相对路径，相对于当前路径
        ]),
        new WebpackBundleAnalyzer() // 帮你生成一个页面，用来分析出口生成的 bundle.js 的模块依赖关系和各个模块的大小
    ]
}
