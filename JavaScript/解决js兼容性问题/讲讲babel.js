
// babel 一词来自于希伯来语，直译为巴别塔, 巴别塔象征的统一的国度、统一的语言, 而今天的JS世界缺少一座巴别塔，不同版本的浏览器能识别的ES标准并不相同，就导致了开发者面对不同版本的浏览器要使用不同的语言，和古巴比伦一样，前端开发也面临着这样的困境, babel的出现，就是用于解决这样的问题，它是一个编译器，可以把不同标准书写的语言，编译为统一的、能被各种浏览器识别的语言.

// 解析 js、ts 等

// 由于语言的转换工作灵活多样，babel的做法和postcss、webpack差不多，它本身仅提供一些分析功能，真正的转换需要依托于插件完成

// babel可以和构建工具联合使用，也可以独立使用

// 如果要独立的使用babel，需要安装下面两个库：
// @babel/core：babel核心库，提供了编译所需的所有api
// @babel/cli：提供一个命令行工具，调用核心库的api完成编译
// @babel/cli的使用极其简单, 它提供了一个命令babel
// 按文件编译: babel 要编译的文件 -o 编辑结果文件
// 按目录编译: babel 要编译的整个目录 -d 编译结果放置的目录

// 可以看到，babel本身没有做任何事情，真正的编译要依托于babel插件和babel预设来完成, babel预设和postcss预设含义一样，是多个插件的集合体，用于解决一系列常见的兼容问题

// 如何告诉babel要使用哪些插件或预设呢？需要通过一个配置文件.babelrc

// .babelrc
// {
//     "presets": [],
//     "plugins": []
// }

// 与其他编译器联用
// babel.config.js
module.exports = {
    presets: [ // babel 预设, 也是从后向前处理，和 loader 一样，预设中每一项都是一个数组，数组第一项是预设的名字，第二项是预设的配置
        // babel有多种预设，最常见的预设是 @babel/preset-env, 可以让你使用最新的JS语法，而无需针对每种语法转换设置具体的插件
        // @babel/preset-env 需要根据兼容的浏览器范围来确定如何编译，和postcss一样，可以在根目录配置文件 .browserslistrc 来描述浏览器的兼容范围
        // .browserslistrc 文件内直接写：
        // last 3 version
        // > 1%
        // not ie <= 8
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: 3 
            }
        ],
        '@vue/cli-plugin-babel/preset' // 如果不写预设配置，可以简化为直接写预设名字，不用数组包裹
    ], 
    // 通常情况下，@babel/preset-env只转换那些已经形成正式标准的语法，对于某些处于早期阶段、还没有确定的语法不做转换，如果要转换这些语法，就要单独使用插件
    plugins: [ // babel 插件，插件是从前往后处理的，与 webpack 的 plugin 是一样的，插件先执行，然后再执行预设, 插件和预设一样，其中每一项都是一个数组，数组第一项是插件的名字，第二项是插件的配置
        [
            "@babel/proposal-class-properties", // 该插件可以让你在类中书写初始化字段
            {
                "loose": true
            }
        ],
        "@babel/proposal-function-bind", // 如果不写插件配置，可以简化为直接写插件名字，不用数组包裹, 该插件可以让你轻松的为某个方法绑定this
        "@babel/proposal-optional-chaining", // 该插件可以转化一些最新的 es 语法
        "transform-remove-console", // 该插件会移除源码中的控制台输出语句, @babel/ 是可以省略的，babel 会自动加上
        "@babel/transform-runtime" // 用于提供一些公共的API，这些API会帮助代码转换
    ]
}

