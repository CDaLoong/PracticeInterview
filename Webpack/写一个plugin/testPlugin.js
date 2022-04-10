module.exports = class MyPlugin {
    apply(compiler) {
        // 在这里注册事件，类似于 window.onload、$(function)
        // compiler: compiler 对象提供了大量的钩子函数
        // hooks: hooks，可以理解为事件
        // done: 事件名称, 即要监听的事件名，即钩子名，所有的钩子：https://www.webpackjs.com/api/compiler-hooks
        // tap: 事件类型，这一部分使用的是 Tapable API，这个小型的库是一个专门用于钩子函数监听的库, 它提供了一些事件类型：tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束; tapAsync：注册一个基于回调的异步的钩子函数，函数通过调用一个回调表示事件处理结束; tapPromise：注册一个基于Promise的异步的钩子函数，函数通过返回的Promise进入已决状态表示事件处理结束
        // 事件处理函数有一个事件参数 compilation
        compiler.hooks.done.tap("MyPlugin", (compilation) => {
            // 事件处理函数
            console.log("编译完成")
        })
    }
}
module.exports = class FileListPlugin {

    constructor(filename = "filelist.txt"){
        this.filename = filename;
    }

    apply(compiler) {
        compiler.hooks.emit.tap("FileListPlugin", complation => {
            var fileList = [];
            for (const key in complation.assets) {
                var content = `【${key}】
大小：${complation.assets[key].size()/1000}KB`;
                fileList.push(content);
            }

            var str = fileList.join("\n\n");
            complation.assets[this.filename] = {
                source() {
                    return str
                },
                size() {
                    return str.length;
                }
            }
        })
    }
}