// webpack-dev-server 命令几乎支持所有的webpack命令参数，如--config、-env等等，你可以把它当作webpack命令使用
// 这个命令是专门为开发阶段服务的，真正部署的时候还是得使用 webpack 命令

// 当我们执行 webpack-dev-server 命令后，它做了以下操作：
// 1. 内部执行webpack命令，传递命令参数
// 2. 开启 watch
// 3. 注册 hooks：类似于 plugin，webpack-dev-server 会向 webpack 中注册一些钩子函数，主要功能如下： 
//   a. 将资源列表（aseets）保存起来
//   b. 禁止 webpack 输出文件
// 4. 用 express 开启一个服务器，监听某个端口，当请求到达后，根据请求的路径，给予相应的资源内容
//   a. 默认监控 8080 端口

// 在 webpack 编译阶段到最后生成 compilation.assets 的时候，webpack-dev-server 使用一个变量接收编译结果
const assets = compilation.assets // 编译结果有如 index.html、index.js、index.css 等
// 然后让 webpack 不能输出内容，类似使用赋值空对象的操作
compilation.assets = {}

// 然后监控 8080 端口，当用户请求数据的时候，直接从 assets 中拿，如：http://localhost:8080/index.html 