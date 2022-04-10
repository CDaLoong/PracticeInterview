const webpack = require("webpack")

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        // 全局常量定义插件，使用该插件通常定义一些常量值, 这样一来，在源码中，我们可以直接使用插件中提供的常量，当webpack编译完成后，会自动替换为常量的值
        new webpack.DefinePlugin({
            PI: `Math.PI`, // const PI = Math.PI
            VERSION: `"1.0.0"`, // VERSION = "1.0.0"
            DOMAIN: JSON.stringify("cdaloong.com")  // DOMAIN = "cdaloong.com"
        }),

        // 它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息
        new webpack.BannerPlugin({
            banner: `
            hash:[hash]
            chunkhash:[chunkhash]
            name:[name]
            author:yuanjin
            corporation:duyi
            `
        }),

        // 自动加载模块，而不必到处 import 或 require, 然后在我们任意源码中：$('#item');  <= 起作用; _.drop([1, 2, 3], 2); <= 起作用
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ]
}