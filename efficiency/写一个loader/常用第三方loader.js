
//file-loader
// function loader(source){
// 	// source：文件内容（图片内容 buffer）
// 	// 1. 生成一个具有相同文件内容的文件到输出目录
// 	// 2. 返回一段代码: export default "文件名"
// }

//url-loader
// function loader(source){
// 	// source：文件内容（图片内容 buffer）
// 	// 1. 根据buffer生成一个base64编码
// 	// 2. 返回一段代码: export default "base64编码"
// }


module.exports = {
    module: {
        rules: [
            // css-loader: css-loader的作用，就是将css代码转换为js代码, 它的处理原理极其简单：将css文件的内容作为字符串导出, 将css中的其他依赖作为 require 导入，以便webpack分析依赖, red{ color:"#f40"; } ---> module.exports = `.red{ color:"#f40"; }`
            // style-loader: style-loader可以将css-loader转换后的代码进一步处理，将css-loader导出的字符串加入到页面的style元素中, style-loader有能力避免同一个样式的重复导入, 由于css-loader仅提供了将css转换为字符串导出的能力，剩余的事情要交给其他loader或plugin来处理,
            { test: /\.css$/, use: ["style-loader", "css-loader"] },  // 匹配 css 文件，css-loader?modules // 开启 css module，
            { test: /\.less$/, use: ["style-loader", "css-loader?modules", "less-loader"] }, // 匹配 less 文件，先让 less-loader 处理，再让 css-loader 处理，再让 style-loader 处理, less-loader 是 css 预编译器 less 提供的 loader，使用一种更加优雅的方式来书写样式代码，通过一个编译器，将其转换为可被浏览器识别的传统css代码
            { test: /\.pcss$/, use: ["style-loader", "css-loader?modules", "postcss-loader"] }, // 匹配 pcss 文件，使用 postcss-loader 根据 postcss.config.js 里的配置对 pcss 文件的代码做转换，需要在根目录写 postcss 的配置
            { test: /\.js$/, use: "babel-loader" }, // 匹配 js 文件，使用 babel 转化，向下兼容，需要在根目录写babel的预设和插件, 只使用一个 loader 时可以不写入数组内
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [{
                    loader: "file-loader", // 生成依赖的文件到输出目录，然后将模块文件设置为：导出一个路径\
                    options: {
                        name: "imgs/[name].[hash:5].[ext]" // 配置文件名 [ext]：原来文件的扩展名，这里的 hash 是文件内容的 hash，这里边的东西是交给 loader 函数的，跟 webpack 没有关系
                    }
                }]
            },
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [{
                    loader: "url-loader", // 将依赖的文件转换为：导出一个base64格式的字符串，小文件多了，如果每次都请求，会占有大量请求的资源
                    options: {
                        // limit: false // 不限制任何大小，所有经过loader的文件进行base64编码返回
                        limit: 10 * 1024, // 只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
                        name: "imgs/[name].[hash:5].[ext]" // file-loader 可以使用的配置
                    }
                }]
            }
        ]
    },
}
