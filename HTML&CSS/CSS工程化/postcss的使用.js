

// 学习到现在，可以看出，CSS工程化面临着诸多问题，而解决这些问题的方案多种多样。
// 如果把CSS单独拎出来看，光是样式本身，就有很多事情要处理。
// 既然有这么多事情要处理，何不把这些事情集中到一起统一处理呢？
// PostCss就是基于这样的理念出现的，借鉴了 webpack，本身就是一个打包工具
// PostCss类似于一个编译器，可以将样式源码编译成最终的CSS代码

// 但PostCss和LESS、SASS的思路不同，它其实只做一些代码分析之类的事情，将分析的结果交给插件，具体的代码转换操作是插件去完成的, 这一点有点像webpack，webpack本身仅做依赖分析、抽象语法树分析，其他的操作是靠插件和加载器完成的。

// postcss库提供了对应的js api用于转换代码，如果你想使用postcss的一些高级功能，或者想开发postcss插件，就要api使用postcss，api的文档地址是：http://api.postcss.org/
// 不过绝大部分时候，我们都是使用者，并不希望使用代码的方式来使用PostCss
// 因此，我们可以再安装一个postcss-cli，通过命令行来完成编译, postcss-cli提供一个命令，它调用postcss中的api来完成编译, 命令的使用方式为：postcss 源码文件 -o 输出文件

// 和webpack类似，postcss有自己的配置文件，该配置文件会影响postcss的某些编译行为。
// 配置文件的默认名称是：postcss.config.js

// 光使用postcss是没有多少意义的，要让它真正的发挥作用，需要插件
// postcss的插件市场：https://www.postcss.parts/

// postcss-preset-env, 过去使用postcss的时候，往往会使用大量的插件，它们各自解决一些问题, 这样导致的结果是安装插件、配置插件都特别的繁琐, 于是出现了这么一个插件postcss-preset-env，它称之为postcss预设环境，大意就是它整合了很多的常用插件到一起，并帮你完成了基本的配置，你只需要安装它一个插件，就相当于安装了很多插件了。

// postcss.config.js
module.exports = {
    map: false, //关闭source-map
    plugins: {
         // 在 postcss 配置中加入 postcss-preset-env 插件
        "postcss-preset-env": { // {} 中可以填写插件的配置
            // stage可以是 0（实验性）到 4（稳定）
            // Stage 0: Aspirational - 只是一个早期草案，极其不稳定, Stage 1: Experimental - 仍然极其不稳定，但是提议已被W3C公认, Stage 2: Allowable - 虽然还是不稳定，但已经可以使用了, Stage 3: Embraced - 比较稳定，可能将来会发生一些小的变化，它即将成为最终的标准, Stage 4: Standardized - 所有主流浏览器都应该支持的W3C标准
            stage: 0, // PostCSS 预设环境, 未来的css语法, 这个插件使我们能够在我们的代码中使用现代 CSS（如嵌套和自定义媒体查询），方法是将其转换为浏览器可以理解的 Vanilla CSS, 哪怕是处于草案阶段的语法，也需要转换
            preserve: false, 
            browsers: [ // 自动的厂商前缀, 某些新的css样式需要在旧版本浏览器中使用厂商前缀方可实现, 要完成这件事情，需要使用autoprefixer库, 而postcss-preset-env内部包含了该库，自动有了该功能。
                "last 2 versions", // 每个浏览器的最后 2 个版本
                "> 1%", // 支持全球使用率至少为 1% 的浏览器。
            ],
        },
    }
}


// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.pcss$/, use: ["style-loader", "css-loader?modules", "postcss-loader"] } // 匹配 pcss 文件，使用 postcss 提供的 postcss-loader 根据 postcss.config.js 里的配置对 pcss 文件的代码做转换 
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