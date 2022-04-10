// 性能优化分为构建性能优化、传输性能优化、运行性能优化

// 永远不要过早的关注于性能，因为你在开发的时候，无法完全预知最终的运行性能，过早的关注性能会极大的降低开发效率

// 这里所说的构建性能，是指在开发阶段的构建性能，而不是生产环境的构建性能, 优化的目标，是降低从打包开始，到代码效果呈现所经过的时间, 构建性能会影响开发效率。构建性能越高，开发过程中时间的浪费越少
// 构建性能的优化可以从减少模块解析、优化loader性能(进一步限制loader的应用范围)、开启(JS 和 样式)热更新、分包等方面进行优化



// 传输性能是指，打包后的JS代码传输到浏览器经过的时间, 在优化传输性能时要考虑到：
// 总传输量：所有需要传输的JS文件的内容加起来，就是总传输量，重复代码越少，总传输量越少
// 文件数量：当访问页面时，需要传输的JS文件数量，文件数量越多，http请求越多，响应速度越慢
// 浏览器缓存：JS文件会被浏览器缓存，被缓存的文件不会再进行传输
// 传输性能的优化可以从代码压缩、配置 tree shaking、css tree shaking、分包、代码分离按需加载等方面进行优化




// 运行性能是指，JS代码在浏览器端的运行速度, 它主要取决于我们如何书写高性能的代码

// 性能优化主要从上面三个维度入手, 性能优化没有完美的解决方案，需要具体情况具体分析