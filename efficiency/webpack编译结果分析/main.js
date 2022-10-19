// -------------------------------- 编译前 -------------------------------
// .src/index.js 模块
console.log(123)
const abc = require("./abc")
console.log(abc)

// .src/abc.js 模块
console.log("module abc")
module.exports = "abc";


// commonJs 导入导出，es6模块化导入导出实现原理类似，只是兼容了更多了模块化的标准
// -------------------------------- 编译后 --------------------------------
(() => {
    // 模块内容都解析到一个对象中，以唯一的模块路径为 key
	var __webpack_modules__ = {
        "./src/abc.js":
            (module) => {
                // console.log("module abc")
                // module.exports = "abc";
                // 使用 eval 执行是跟浏览器机制有关系的，浏览器的调试手段：在执行 eval 内的代码时会将 eval 内的代码放到一个新的模块中执行，eval 配置 //# sourceURL=./src/abc.js? 可以在报错的时候将模块地址指向我们配置的 ./src/abc.js
                eval("console.log(\"module abc\")\nmodule.exports = \"abc\";\n\n//# sourceURL=webpack:///./src/abc.js?");
            },
        "./src/index.js":
            (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
                // console.log(123)
                // const abc = __webpack_require__("./src/abc.js")
                // console.log(abc)
                eval("console.log(123)\nconst abc = __webpack_require__(/*! ./abc */ \"./src/abc.js\")\nconsole.log(abc)\n\n//# sourceURL=webpack:///./src/index.js?");
            }
	};
	// 缓存模块内容，再次读取时不用重复执行
	var __webpack_module_cache__ = {};
	// 实现 require 函数
	function __webpack_require__(moduleId) {
		// 查看是否有缓存
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// 创建 module 对象，内部的 exports 也是一个对象
		var module = __webpack_module_cache__[moduleId] = {
			exports: {}
		};
	
		// 没有缓存，因为模块路径是唯一的，根据模块路径在存储模块内容的对象中读取模块信息
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Return the exports of the module
		return module.exports;
	}
    // 根据入口开始递归读取、执行模块内容
	var __webpack_exports__ = __webpack_require__("./src/index.js");
	
})()
