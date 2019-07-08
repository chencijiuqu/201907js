/**基本数据类型和引用数据类型
 * 基本数据类型和引用数据类型区别：基本数据是操作值，引用数据类型是操作堆空间地址。
*/

/**基本数据类型
 * 1. number
 * 2. string
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. Symbol
 */

/**引用数据类型
 * 1. 对象
 * 2. 数组
 * 3. 正则
 * 4. 日期
 * 5. 函数
 * 6. 日期
 * 7. Math
 */

// a 和 b 都是存储到栈内存中，存放在不同的空间下。 obj 和 obj1 是一个空间地址类型， obj 和 obj1 指向同一个堆内存；当改变 obj1 时， obj也会发生改变。
var a = b = 10; 
var obj = obj1 = {};
b = 11;
console.log(a); // 10
obj1.a = 18;
console.log(obj); // {a: 18}

/** Number：
 * 1. isNaN：检测是不是无效数字的函数。
 *  NaN不等于NaN
 * 2. parseInt：从左到右检测数字（不可检测小数点），如果第一个就不是数字直接 NaN
 * 3. paseFloat：从左到右检测数字（可检测小数点），如果第一个就不是数字直接 NaN
 * 4. Number：强制转化，只要有一个不是数字的直接NaN。（可以检测小数点）
 * 5. toFixed：保留小数点位数,会四舍五入（返回字符串）【有的浏览器可能五舍六入】
 * 保留小数点位数 num.toFixed(位数)
 */
var num = 10.88999;
var num1 = 10.8;
console.log(num1); // 10.80
console.log(Number(num1.toFixed(2) + 100)); // 110.8
num.toFixed(2); // toFixed前面一定要有东西


/** String（要检测一下）
 * 1. length
 * 2. 索引
 * 3. + - *
 */
console.log("30px" / 5); /// NaN
console.log("30" / 5); /// 6

console.log("30px" + 5); // "30px5"
console.log("30" + 5); // "305"

console.log("30px" += 5); //Uncaught ReferenceError: Invalid left-hand side in assignment
console.log("30" += 5); // Uncaught ReferenceError: Invalid left-hand side in assignment

console.log("30px" * 5); // NaN
console.log("30" * 5); // 150

console.log("30px" - 5); // NaN
console.log("30" - 5); // 25

console.log("30px" % 5); // NaN
console.log("30" % 5); // 0


/**Boolean
 * 1. true
 * 2. false
 * 3. 其他类型转换布尔值：只有这几个值是 false （0 NaN undefined null ""）
 * 4. !(取反运算符):先把后面的值转换成布尔值再取反。
 * 5. !!（取反再取反）：一般用于把值转换成布尔值
 */

/**
 * null：获取不到空对象指针
 * undefined：如果变量只声明没赋值，那么默认存储值是 undefined
 * 获取对象属性名对应的属性值，如果属性名不存在，那么得到属性值是 undefined。
 */

/**对象
 * 1. 空对象：{}
 * 2. 普通对象：{name: "coco",1: "100",1a:"报错",1:100}
 * 3. 如果属性名重复的话，后面的属性名的值会把前面的覆盖掉
 * 4. 获取：对象.属性名 || 对象["属性名"]
 * 5. 增加和修改：对象.属性名 = 值 或 对象["属性名"] = 值 （如果存在就是修改，不存在就增加
 * 6. 删除：delete ：delete 对象.属性名; // 把属性名和值删掉
 */

/**引用数据类型
 * 1. 开辟一个堆内存空间地址
 * 2. 把键值对存储在这个堆内存中
 * 3. 把这个空间地址赋值给对象名
 */
var obj = {
    n: 20,
    num: obj.n + 10 // num: undefined.n + 10     报错：Uncaught TypeError: Cannot read property 'n' of undefined (不能读取undeinfed的n属性)
}

var obj = {1: 10,a: 20,}
obj[1]; // 内置类型，会以字符串解析
obj[a]; // a会以变量解析

var obj = {
    undefined: 10,
    a: 20
}
var a = undefined;
obj[a]; // 10
obj[undefined]; // 内置数据类型，会转成字符串，然后解析
obj["b"]; // undefined















var a = 1;
(a++) + (++a) + (isNaN(a)) + typeof a 
1 + ++(++a)
var a = 1; // 2
(a++) // 1++ -> 2
 + 
(++a) // 2




for (var i = 0; i < 10; i++) { // 3
    // i = 0; 满足 i < 6 执行里面代码 i = 0 + 2 然后continue
    // i = 3; 满足 i < 6 执行里面代码 i = 5;然后跳过本轮直接 i++
    // i = 6; 不满足所有if语句 i = 6 + 2;然后继续循环 i++
    // i = 9;满足 i > 7;执行里面代码 ++i （10）然后跳过本轮 进行累计 i++ -> 11
    if(i > 7) {
        ++i;
        continue;
    };
    if ( i < 6) {
        i += 2;
        continue;
        break;
    }
    i += 2;
};
console.log(i);

![] === false; // false
// [] 转换布尔值 -> true
// ! true -> false
// false === false -> true3