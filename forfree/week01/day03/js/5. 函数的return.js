function sum() {
    let total = null;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        console.log(total); // 仅仅用于在控制台输出这个值，作用就是调试代码
        return 1; // 不会报错，不过只能执行一遍
    }
    return total;
};
// 在函数体中定义的变量，函数执行形成私有作用域会对其进行保护；函数体外不可以使用该变量
// return：函数的出口。return后面的值也叫函数的返回值；也是函数的运行结果；
// return total：仅仅是把total这个变量存储的值返回到函数体外面，并不是把total返回到函数体外
// return 只能出现在函数体中
sum(19,89,76,56,36,89,27); // 代表函数的返回值；也是函数体中 return右边的值
let a = null + 10; // 10
let n = undefined + 10; // NaN
console.log(total); // 如果我要在全局输出它，我应该怎么做

/**return作用
 * 1. 函数返回值
 * 2. 终止return下面的代码
 *
 *
 */
var n ; // 接收函数内的变量
function sum2() {
    var total = null;
    // console.log(100);
    n = total; // 将n的值改为 total, 缺点形成闭包
    return 1,
    2,3;
    4;5; // 3 返回值多个逗号只输出分号左边的值

}
sum2()
n += 9;