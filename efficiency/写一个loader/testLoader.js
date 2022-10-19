const loaderUtils = require('loader-utils')

// { // 每个规则是一个对象
//     test: /\.js$/, // 匹配的模块正则
//     use: [ // 匹配到后应用的加载器，可以使用多个
//         {  // 规则1
//             loader: "./testLoader1.js", // loader模块的路径，该字符串会被放置到require中
//             options: { // 向对应loader传递的额外参数
//                changeVar: "变量"
//             }
//         },
//         {  // 规则2
//             loader: "./testLoader2.js", // loader模块的路径，该字符串会被放置到require中
//             options: { // 向对应loader传递的额外参数
//                changeLet: "块级变量"
//             }
//         },
//     ]
//   },

// loader 是从上往下匹配的，但是是从下往上执行的
// 匹配过程中会从第一个匹配到的规则开始放到一个数组中 [规则1，规则2]
// 执行过程从数组的最后一项开始取出来执行，先如后出，类似堆栈， 规则2 -- 规则1

// { // 简写
//     test: /\.js$/, // 匹配的模块正则
//     // 匹配到后应用的加载器
//     use: ["./testLoader?changeVar=变量"] // loader模块的路径，该字符串会被放置到require中，？号后跟的是 options 中的内容
//   },

// testLoader1.js
module.exports = function(sourceCode) {
    console.log('testLoader1执行了')
    console.log(this) // loader options 中的配置都在 webpack 生成的上下文中，通过 this获取，一般使用 第三方库 loader-utils 解析 this 中的 options
    const options = loaderUtils.getOptions(this)
    console.log(options)
    const reg = new RegExp(options.changeVar, 'g')
    return sourceCode.replace(reg, 'var') // 把变量替换为 var，如: 变量 a = 1;  ==》 var a = 1;
}

// testLoader2.js
module.exports = function(sourceCode) {
    console.log('testLoader2执行了')
    console.log(this) // loader options 中的配置都在 webpack 生成的上下文中，通过 this获取，一般使用 第三方库 loader-utils 解析 this 中的 options
    const options = loaderUtils.getOptions(this)
    console.log(options)
    const reg = new RegExp(options.changeVar, 'g')
    return sourceCode.replace(reg, 'let') // 把变量替换为 var，如: 变量 a = 1;  ==》 var a = 1;
}


// rules: [
//     {
//         test: /index\.js$/, //正则表达式，匹配模块的路径
//         use: ["./loaders/loader1", "./loaders/loader2"] //匹配到了之后，使用哪些加载器
//     }, //规则1
//     {
//         test: /\.js$/, //正则表达式，匹配模块的路径
//         use: ["./loaders/loader3", "./loaders/loader4"] //匹配到了之后，使用哪些加载器
//     } //规则2
// ], // 模块的匹配规则

// 执行顺序：4 -- 3 -- 2 -- 1