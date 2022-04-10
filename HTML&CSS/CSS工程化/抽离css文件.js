
// 目前，css代码被 css-loader 转换后，交给的是 style-loader 进行处理。

// style-loader 使用的方式是用一段 js 代码，将样式加入到 style 元素中。

// 而实际的开发中，我们往往希望依赖的样式最终形成一个css文件

// 此时，就需要用到一个库：mini-css-extract-plugin

// 该库提供了1个plugin和1个loader
// loader：负责记录要生成的css文件的内容，同时导出开启css-module后的样式对象
// plugin：负责生成css文件
// 会自动在 html 文件里生成一个 link 标签

// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules", "sass-loader"] }, // 负责记录要生成的css文件的内容，同时导出开启css-module后的样式对象
        ]
    },
    plugins: [
        // 负责生成 css 文件
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:5].css", // 同 output.filename的含义一样，默认为 [name].css, 即根据 chunk 生成样式文件名, 可以配置生成的文件名: 例如[name].[contenthash:5].css, 默认情况下，每个chunk对应一个css文件
        })
    ]
}