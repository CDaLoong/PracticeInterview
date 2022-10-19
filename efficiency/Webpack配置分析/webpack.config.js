const path = require('path');

// npx webpack --env.prod  --> env: { prod: true }

// npx webpack --env abc  --> env: "abc"
// npx webpack --env.abc=1  --> env： {abc:1}
// npx webpack --env.abc=1 --env.bcd=2   --> env: {abc:1, bcd:2}
// module.exports = function (env) { // 配置可以是一个函数，在开始构建时，webpack如果发现配置是一个函数，会调用该函数，将函数返回的对象作为配置内容，因此，开发者可以根据不同的环境返回不同的对象, 在调用webpack函数时，webpack会向函数传入一个参数env，该参数的值来自于webpack命令中给env指定的值
//     if (env && env.prod) {
//         return {
//             mode: "production",
//             devtool: "none"
//         }
//     }
//     else {
//         return {
//             mode: "development",
//             devtool: "source-map"
//         }
//     }
// }

// package.json 中的 scripts
// "scripts": {
//     "dev": "webpack --mode=development", // webpack 指执行 webpack-cli 中的指令，vue 中是执行 vue-cli 中的指令: "serve": "vue-cli-service serve",
//     "build": "webpack --mode=production"
//   },

module.exports = {
//   mode: "production", // "production" | "development" | "none"
//   mode: "production", // 生产环境
  mode: "development", // 开发环境
//   mode: "none", // no defaults
  // 选择的模式告诉webpack使用相应的内置优化

  // 配置入口，主函数，配置的是有几个 chunk
//   entry: "./src/index.js", // string | object | array
    // 标准写法
    entry: {
        main: "./src/index.js",
    },
  // 配置多个入口
//   entry: ["./app/entry1", "./app/entry2"],
//   entry: {
//     a: "./app/entry-a",
//     b: ["./app/entry-b1", "./app/entry-b2"]
//   },
  // 这里应用程序开始执行
  // webpack 开始打包

  // 配置出口，即打包后文件的保存路径
  output: {
    // webpack 如何输出结果的相关选项

    // 路径，必须是绝对路径，默认是 dist
    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    // 配置的是合并的 js 文件名的规则，配置的是 chunk
    filename: "bundle.js", // string
    // filename: "[name].js", // 用于多个入口点(entry point)（出口点？），动态生成合并的 js 文件，入口的文件名会替换掉中括号中的 name，[name] 就是一个占位符
    // filename: "[name]-[hash:5].js", // 通常会使用一个 [hash] 占位，因为浏览器请求 js 文件会有缓存，如果更新 js 内容而不改名，浏览器可能会使用缓存，hash 每次可以生成一个动态的内容，用来做每次打包名字不同，从而避免浏览器使用缓存，hash 后面可以跟一个冒号加数字，代表取 hash 前几位
    // filename: "[name]-[chunkhash].js", // 也可以使用 chunkhash 处理浏览器缓存，chunkhash 是 chunk 内生成的 hash，根据 js 文件等发生变化而改变
    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    // 公共路径, 有些 loader 和 plugin 会使用，会在一些文件的路径前拼接上配置的内容，如配置 /assets/， 则 /assets/img/a.jpg
    // 一般配置打包后的资源路径，往往写一个 /，如：/img/a.jpg，省略了前面的协议、域名、端口号，即：http://localhost:3000/img/a.jpg
    publicPath: "/", // string
    // publicPath: "",
    // publicPath: "https://cdn.example.com/",
    // 输出解析文件的目录，url 相对于 HTML 页面

    // 最终的打包结果赋值给变量 MyLibrary，暴露入口文件导出的结果, 这样一来，打包后的结果中，会将自执行函数的执行结果暴露给 MyLibrary 变量, jQuery 就是这样暴露 $ 的
    library: "MyLibrary", // string,
    // 导出库(exported library)的名称

    // 该配置可以更加精细的控制如何暴露入口包的导出结果，最终打包结果暴漏给哪个模块，如：libraryTarget: "window"  -->  window.MyLibrary = 入口文件导出的结果, 即自执行函数的执行结果
    libraryTarget: "umd", // 通用模块定义
        // libraryTarget: "umd2", // 通用模块定义
        // libraryTarget: "commonjs2", // exported with module.exports
        // libraryTarget: "commonjs-module", // 使用 module.exports 导出
        // libraryTarget: "commonjs", // 作为 exports 的属性导出
        // libraryTarget: "amd", // 使用 AMD 定义方法来定义
        // libraryTarget: "this", // 在 this 上设置属性
        // libraryTarget: "var", // 变量定义于根作用域下
        // libraryTarget: "assign", // 盲分配(blind assignment)
        // libraryTarget: "window", // 在 window 对象上设置属性
        // libraryTarget: "global", // property set to global object
        // libraryTarget: "jsonp", // jsonp wrapper
    // 导出库(exported library)的类型

    /* 高级输出配置（点击显示） */
    // pathinfo: true, // boolean
    // // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。

    // chunkFilename: "[id].js",
    // chunkFilename: "[chunkhash].js", // 长效缓存(/guides/caching)
    // // 「附加分块(additional chunk)」的文件名模板

    // jsonpFunction: "myWebpackJsonp", // string
    // // 用于加载分块的 JSONP 函数名

    // sourceMapFilename: "[file].map", // string
    // sourceMapFilename: "sourcemaps/[file].map", // string
    // // 「source map 位置」的文件名模板

    // devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
    // // 「devtool 中模块」的文件名模板

    // devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
    // // 「devtool 中模块」的文件名模板（用于冲突）

    // umdNamedDefine: true, // boolean
    // // 在 UMD 库中使用命名的 AMD 模块

    // crossOriginLoading: "use-credentials", // 枚举
    // crossOriginLoading: "anonymous",
    // crossOriginLoading: false,
    // // 指定运行时如何发出跨域请求问题

    // /* 专家级输出配置（自行承担风险） */
    // devtoolLineToLine: {
    //   test: /\.jsx$/
    // },
    // // 为这些模块使用 1:1 映射 SourceMaps（快速）

    // hotUpdateMainFilename: "[hash].hot-update.json", // string
    // // 「HMR 清单」的文件名模板

    // hotUpdateChunkFilename: "[id].[hash].hot-update.js", // string
    // // 「HMR 分块」的文件名模板

    // sourcePrefix: "\t", // string
    // // 包内前置式模块资源具有更好可读性
  },

  // 关于模块配置
  module: { 

    // 配置 loaders 
    rules: [
      // 模块匹配规则，可以存在多个规则（配置 loader、解析器等选项）,每个规则是一个对象, 挨个匹配每个规则，匹配上就执行
      // loader本质上是一个函数，它的作用是将某个源码字符串转换成另一个源码字符串返回。
      // loader函数的将在模块语法解析的过程中被调用，以得到最终的源码。
        
      { //每个规则是一个对象
        test: /\.js$/, //匹配的模块正则
        use: [ //匹配到后应用的规则模块
            {  //其中一个规则
                loader: "模块路径", //loader模块的路径，该字符串会被放置到require中
                options: { //向对应loader传递的额外参数

                }
            }
        ]
      },
      {
        // test: /\.jsx?$/, // 正则表达式，匹配模块路径
        // include: [
        //   path.resolve(__dirname, "app")
        // ],
        // exclude: [
        //   path.resolve(__dirname, "app/demo-files")
        // ],
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include

        // issuer: { test, include, exclude },
        // issuer 条件（导入源）

        // enforce: "pre",
        // enforce: "post",
        // 标识应用这些规则，即使规则覆盖（高级选项）

        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。

        options: {
          presets: ["es2015"]
        },
        // loader 的可选项
      },

      {
        test: /\.html$/, //匹配的模块正则
        // test: "\.html$",

        use: [ // 匹配到后应用的规则模块
          // 应用多个 loader 和选项
          "htmllint-loader",
          {
            loader: "html-loader", // loader模块的路径，该字符串会被放置到require中
            options: {  // 向对应loader传递的额外参数
              /* ... */
            }
          }
        ]
      },
      // 只使用这些嵌套规则之一
    //   { oneOf: [ /* rules */ ] },
      // 使用所有这些嵌套规则（合并可用条件）
    //   { rules: [ /* rules */ ] },
      // 仅当所有条件都匹配时才匹配
    //   { resource: { and: [ /* 条件 */ ] } },
    //   { resource: { or: [ /* 条件 */ ] } },
    // 任意条件匹配时匹配（默认为数组）
    //   { resource: [ /* 条件 */ ] },
        
    // 条件不匹配时匹配
    //   { resource: { not: /* 条件 */ } }
    ],

    /* 高级模块配置 */
    // 不解析正则表达式匹配的模块，即不对 special-library.js 模块做任何操作，直接将其源代码放入模块内容中，通常用它来忽略那些大型的单模块库(已经被打包过的，不能有其他依赖)，以提高构建性能，如 jQuery  -->  noParse: /jquery/
    noParse: [
      /special-library\.js$/, 
      /jquery/
    ],

    // 为动态请求指定默认行为
    // unknownContextRequest: ".",
    // unknownContextRecursive: true,
    // unknownContextRegExp: /^\.\/.*$/,
    // unknownContextCritical: true,
    // exprContextRequest: ".",
    // exprContextRegExp: /^\.\/.*$/,
    // exprContextRecursive: true,
    // exprContextCritical: true,
    // wrappedContextRegExp: /.*/,
    // wrappedContextRecursive: true,
    // wrappedContextCritical: false,
  },

   // 解析模块请求的选项, 主要用于控制模块解析过程
  resolve: {
   
    // 模块的查找位置，（不适用于对 loader 解析）
    modules: [
      "node_modules", // 先从 node_modules 中找
      path.resolve(__dirname, "src")
    ],

    // 模块使用的扩展名列表, 当 webpack 解析模块时，遇到无具体后缀的导入语句，例如require("test")，会依次测试它的后缀名, 注意，补全后缀名的是 webpack
    extensions: [".js", ".json", ".jsx", ".css"],

    // 模块或绝对路径使用的别名列表, 有了alias（别名）后，导入语句中可以加入配置的键名，例如require("@/abc.js")，webpack会将其看作是require(src的绝对路径+"/abc.js")
    // 在大型系统中，源码结构往往比较深和复杂，别名配置可以让我们更加方便的导入依赖
    alias: {

      "@": path.resolve(__dirname, 'src'), // @ ---> 当前目录下的 ./src

      "_": __dirname,  // _ 表示当前目录

      "module": "new-module",
      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
    },
    /* 可供选择的别名语法（点击展示） */
    // alias: [
    //   {
    //     name: "module",
    //     // 旧的请求

    //     alias: "new-module",
    //     // 新的请求

    //     onlyModule: true
    //     // 如果为 true，只有 "module" 是别名
    //     // 如果为 false，"module/inner/path" 也是别名
    //   }
    // ],

    /* 高级解析选项（点击展示） */
//     symlinks: true,
//     // 遵循符号链接(symlinks)到新位置

//     descriptionFiles: ["package.json"],
//     // 从 package 描述中读取的文件

//     mainFields: ["main"],
//     // 从描述文件中读取的属性
//     // 当请求文件夹时

//     aliasFields: ["browser"],
//     // 从描述文件中读取的属性
//     // 以对此 package 的请求起别名

//     enforceExtension: false,
//     // 如果为 true，请求必不包括扩展名
//     // 如果为 false，请求可以包括扩展名

//     moduleExtensions: ["-module"],
//     enforceModuleExtension: false,
//     // 类似 extensions/enforceExtension，但是用模块名替换文件

//     unsafeCache: true,
//     unsafeCache: {},
//     // 为解析的请求启用缓存
//     // 这是不安全，因为文件夹结构可能会改动
//     // 但是性能改善是很大的

//     cachePredicate: (path, request) => true,
//     // predicate function which selects requests for caching

//      // 应用于解析器的附加插件
//     plugins: [
//       // ...
//     ]
  },

  performance: {
    hints: "warning", // 枚举
    hints: "error", // 性能提示中抛出错误
    hints: false, // 关闭性能提示
    maxAssetSize: 200000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
//   devtool: "inline-source-map", // 嵌入到源文件中
//   devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中，建议在开发环境中使用
//   devtool: "hidden-source-map", // SourceMap 不在源文件中引用，有些工具可以捕捉
//   devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
//   devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
//   devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。

  // 当前执行的路径，绝对路径, 该配置会影响入口和 loaders 的解析，入口和 loaders 的相对路径会以 context 的配置作为基准路径，这样，你的配置会独立于CWD（current working directory 当前执行路径）
  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  // 设置打包结果最终要运行的环境
  target: "web", // 打包后的代码运行在web环境中
//   target: "webworker", // WebWorker
//   target: "node", // 打包后的代码运行在node环境中, node.js 通过 require
//   target: "async-node", // Node.js 通过 fs and vm
//   target: "node-webkit", // nw.js
//   target: "electron-main", // electron，主进程(main process)
//   target: "electron-renderer", // electron，渲染进程(renderer process)
//   target: (compiler) => { /* ... */ }, // 自定义
  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)

//   externals: ["react", /^@angular\//],
//   externals: "react", // string（精确匹配）
//   externals: /^[a-z\-]+($|\/)/, // 正则
// 从最终的bundle中排除掉配置的配置的源码
  externals: { // 对象
    jquery: "$", // 将 jquery 模块导入改成导入一个 $ 符
    lodash: "_", // 将 lodash 模块导入改成导入一个 _ 符
    angular: "this angular", // this["angular"]
    react: { // UMD
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  },
//   externals: (request) => { /* ... */ return "commonjs " + request },
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

// stats控制的是构建过程中控制台的输出内容, 所有选项都是可选的
//   stats: "errors-only",
  stats: { //object
    assets: true,
    colors: true, // 是否带颜色
    errors: true,
    errorDetails: true,
    hash: true,
    // ...
  },
  // 精确控制要显示的 bundle 信息

  // 到后端开发服务器的代理url
  devServer: {
    open: true, // 编译完成自动打开页面

    // 配置代理，用来处理跨域，跨域是浏览器端的，在服务器端是不存在跨域的，使用 devServer 处理跨域只需要配置代理即可
    // 前端页面和 js 开发完成后，往往会部署到同一个域中，跨域往往出现在开发阶段
    proxy: {
    //   '/api': 'http://localhost:3000', // 请求地址中只要包含 /api，就会在 /api 前自动拼接上，如：http://localhost:3000/api/abc
    "/api": { // 请求地址中只要包含 /api，就会在 /api 前自动拼接上，如：http://localhost:3000/api/abc
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}, // 如果你不想始终传递 /api ，则需要重写路径，拼接后的路径将没有 /api，如：http://localhost:3000/abc
      }
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // 开启热更新（热替换），具体的实现是通过 webpack.HotModuleReplacementPlugin 插件实现的，webpack4 及以上不需要配置此插件，开启热更新后默认启用
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  // 附加插件列表
  plugins: [
    new MyPlugin(), // 自己开发的插件
  ],


  /* 高级配置（点击展示） */
//   resolveLoader: { /* 等同于 resolve */ },
//   // 独立解析选项的 loader

//   parallelism: 1, // number
//   // 限制并行处理模块的数量

//   profile: true, // boolean
//   // 捕获时机信息

//   bail: true, //boolean
//   // 在第一个错误出错时抛出，而不是无视错误。

//   cache: false, // boolean
//   // 禁用/启用缓存

  watch: true, // boolean
  // 启用观察

  watchOptions: {
    aggregateTimeout: 1000, // in ms
    // 将多个更改聚合到单个重构建(rebuild)

    poll: true,
    poll: 500, // 间隔单位 ms
    // 启用轮询观察模式
    // 必须用在不通知更改的文件系统中
    // 即 nfs shares（译者注：Network FileSystem，最大的功能就是可以透過網路，讓不同的機器、不同的作業系統、可以彼此分享個別的檔案 ( share file )）
  },

//   node: {
//     // Polyfills and mocks to run Node.js-
//     // environment code in non-Node environments.

//     console: false, // boolean | "mock"
//     global: true, // boolean | "mock"
//     process: true, // boolean
//     __filename: "mock", // boolean | "mock"
//     __dirname: "mock", // boolean | "mock"
//     Buffer: true, // boolean | "mock"
//     setImmediate: true // boolean | "mock" | "empty"
//   },

//   recordsPath: path.resolve(__dirname, "build/records.json"),
//   recordsInputPath: path.resolve(__dirname, "build/records.json"),
//   recordsOutputPath: path.resolve(__dirname, "build/records.json"),

}
