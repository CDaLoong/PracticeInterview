// 函数的 this 关键字在 JavaScript 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别
// 在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）
// this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

function baz() {
    // 当前调用栈是：baz
    // 因此，当前调用位置是全局作用域, this --> global/window

    console.log( "baz", this );
    bar(); // <-- bar的调用位置
}

function bar() {
    // 当前调用栈是：baz --> bar
    // 因此，当前调用位置在baz中
    
    console.log( "bar", this );
    foo(); // <-- foo的调用位置
}

function foo() {
    // 当前调用栈是：baz --> bar --> foo
    // 因此，当前调用位置在bar中
    
    console.log( "foo", this );
}

baz(); // <-- baz的调用位置


