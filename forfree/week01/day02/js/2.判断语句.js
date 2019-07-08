// html：超文本标记语言
// js：单线程编程语言


// 数据类型 操作语句 （三个判断、三个循环） 函数
// 1. 三个判断
//  1.1 if else
//  1.2 三元运算符
//  1.3 switch case


// if else
// 使用 if语句时，else 和 else if 可以不写，但是 if 一定要写。而且 else if 一定要写条件

// if条件里面的代码也会赋值
// 举例
var a=1; 
if(++a==a++) 
{ 
    console.log(a)
} else {
    console.log(a)
};
// if（如果）  else（否则）
if (条件) { // 条件成立时为 true ， 条件不成立时为 false
    // 如果条件成立，则执行此处代码
} else {
    // 如果条件不成立，则执行此处代码。
    // 如果条件成立，此处不执行
}

// 举例：
if ( 1 === 1) { 
    console.log(100);
} else {
    console.log(200);
}


// 复杂的 if 语句
// 只要遇到一个成立的条件，下面的条件是否成立都不再执行
// 当条件只有一个值的时候再进行布尔转换
if (isNaN([])) { // isNaN([]) -> isNaN(Number([])) -> false 不执行下面的代码
    console.log(1);
} else if (Number("3px")) {
    console.log(2);
} else if (typeof NaN == "NaN") {
    console.log(3);
} else {
    console.log(4);
}

// 三元运算符：一般用于简单的判断
条件 ? true(条件成立时的代码) : false(条件不成立时的代码)

var num = 100;
if (10 > 9) {
    num = 9;
} else {
    num = 20;
}
// 转换成三元运算符
10 > 9 ? num = 9 : num = 20;

if (10 > 8) {
    if( 5 > 8) {
        console.log(2);
    };
} else {
    console.log(1)
}

// switch case 绝对比较
// case 情况
var num = 1;
switch(num) { // 要比较的值
    case true: // num === true
        console.log(1);
        break; // 中断 如果没有 break 下面的代码不管成立与否都会执行
    case "1": // num === "1"
        console.log(2);
        break;
    case [1]: // num === [1]
        console.log(3);
        break;
    case 0: // num === 0
        console.log(4);
        break;
    default: // 默认,当上面条件都不成立时，执行此处的代码
        console.log(5);
}
// 把上面改成 if else 形式

var num = 1;
if(num === true) {
    console.log(1);
} else if (num === "1"){
    console.log(2);
} else if (num === 1) {
    console.log(3);
} else if(num === 0) {
    console.log(4);
} else {
    console.log(5);
}

// && 和 || 区别
// &&(并且)：这个符号左右两边的值都是 true ，整体结果才是 true 。也有一个 false ，整体就是 false 。
// ||(或或)：这个符号左右两边只要有一个是 true ，整体就是 true 。 