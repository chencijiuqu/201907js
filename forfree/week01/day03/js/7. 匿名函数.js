function fn() {

}; // 有名函数




// 自执行函数(匿名函数)
(function (形参) {
    console.log(100);
})(实参)

// 另一种写法
(function () {
    return 100;
}())



// 注意
(function fn() {
    console.log(101);
})()
fn(); // 报错



// 自执行函数第二种

// 返回值一定是布尔值，因为function前面有个取反符
!function () {
    return 88;
}(); // false

!function () {
    return NaN;
}(); // true


// + 代表正数
+function () {
    return 18;
}(); // 18

+function () {
    return -18;
}(); // -18


// - 代表 负数
-function () {
    return 56;
}(); // -56

-function () {
    return -56
}(); // 56


/** ~ 按位取反
 * 1. 所有正整数的按位取反是其本身+1的负数
 * 2. 所有负整数的按位取反是其本身+1的绝对值
 * 3. 零的按位取反是 -1
 */
~function () {
    return 11;
}(); // -12

~function () {
    return -11;
}(); // 10    -11 + 1 = -10 -> |-10| -> 10


// 函数表达式
// 函数开辟一个堆内存的空间地址，把这个地址给了变量名 sum
var sum = function () {};


var zf = !!function () {
    console.log(108);
    return 88;
}(); 