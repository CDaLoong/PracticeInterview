module.exports = {
    "env": { // 配置代码的运行环境
        "browser": true, // 代码是否在浏览器环境中运行
        "es2021": true // 是否启用ES2021的全局API
    },
    "extends": [ // 该配置继承自哪里, 它的值可以是字符串或者数组
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser", // eslint的工作原理是先将代码进行解析，然后按照规则进行分析, 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
    "parserOptions": { // 指定eslint对哪些语法的支持
        "ecmaVersion": "latest", // 支持的ES语法版本
        "sourceType": "module" // 模块化脚本
    },
    "plugins": [ // 插件，如支持 ts 代码检查的插件
        "@typescript-eslint"
    ],
    // eslint规则集, 每条规则影响某个方面的代码风格, 每条规则都有下面几个取值：off 或 0 或 false: 关闭该规则的检查; warn 或 1 或 true：警告，不会导致程序退出; error 或 2：错误，当被触发的时候，程序会退出
    // 配置的时候去官网看，有官方推荐的最佳实践 https://eslint.bootcss.com/docs/rules/
    "rules": {
    },
}
