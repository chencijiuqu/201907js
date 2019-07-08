/**
 * 1. JS 中为什么要有函数
 *  1.1 把实现同一个功能的代码放到一个函数体中。当想实现这个功能时，直接执行这个函数就可以。
 * 2. 函数的定义
 *  2.2 function 函数名(形参) {函数体};
 * 3. 函数的参数
 *  3.1 形参和实参一一对应
 * 4. 函数的 arguments
 * 5. 函数体中的 return
 * 6. 匿名函数
 */

// 定义函数， function：关键字（在JS中有特殊的意义）
function 函数名(形参) {函数体}; // 形参是函数的私有变量
函数名(实参); // 函数的执行
// 形参和实参一一对应

// 把实现同一个功能的代码放到一个函数体中。当想实现这个功能时，直接执行这个函数就可以。减少了代码的冗余、高内聚，低耦合。这就是函数封装。


// 举例
function fn() {}

// 保留两位小数求和
var num1 = 12.897;
var num2 = 30.678;
var total = Number(num1.toFixed(2)) + Number(num2.toFixed(2));

var num3 = 20.867;
var num4 = 23.568;
var total = Number(num3.toFixed(2)) + Number(num4.toFixed(2));

// 用函数写 (封装)
function sum(num1,num2) {
    var total = Number(num1.toFixed(2)) + Number(num2.toFixed(2));
    return total;
}; // 函数的定义
sum(20.867,23.568); // 函数的执行
sum(21.933,23.658);