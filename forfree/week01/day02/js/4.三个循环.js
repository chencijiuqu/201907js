//三个循环
// for 循环
// for in 循环
// wile 循环

// JS 是单线程编程语言。每次只能执行一行代码。
// 加载顺序：从上到下，从左到右
// i++ ：在自身基础上加 1
// ++i：在自身基础上加 1
// ++1 先运算后输出
// i++先输出后运算
/**for 循环四部曲
 * 1. 初始化变量 i = 0
 * 2. 进行条件判断
 * 3. 执行循环体内的代码
 * 4. 执行i++
 */

for (let i = 0; i < 100; i++) { // var定义一个i等于0，然后判断 i 是否小于 100，
    console.log(100); // 花括号叫做循环体
} // 运行了100次
console.log(i); // 100
let num = 10;
console.log(num++); // 10 i++先输出后运算
console.log(num);; // 11

let n = 10;
++n;
console.log(n); // 11
n + 2;
console.log(n); // 11
n += 2;
console.log(n); // 12

// 求1-100之间数字的和
let total = 0;
for (let i = 1; i < 101; i++) {
    total += i;
};
console.log(total);

// 求1-100 之间偶数数字的和
// %运算法 取余
let num = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        num += i;
    };
};

// 3. continue 结束本轮循环，在 for循环中，如果遇到continue，那么下面代码不再执行，直接执行i++
for (let i = 0; i < 80; i++) {
   if (i > 50) continue; 
    console.log(i);
    if (i === 20) continue; // 跳过本轮循环 
};

// 4. break 结束整个循环 i++也不再执行
for (let i = 0; i < 20; i++) {
    console.log(i); // 0 1 2 3 4
    if (i === 5) {
        break; // 终止整个循环
    };
};


for (var i = 0; i < 11; i++) { // 2 4 6 8 10
    if (i < 4) { // 0 2 
        i++; // 1 3
        continue;
}
    if (i > 9) { // 10
        i += 2; // 10 + 2
        break;
    }
    i++; // 5 7 9
}
console.log(i);// 12

for (var i = 0; i < 10; i++) { // 3 6 9 11
    if(i > 7) {
        ++i; // 10
        continue;
    };
    if ( i < 6) {
        i += 2; // 2 5
        continue;
        break;
    }
    i += 2; // 8
};
console.log(i); // 11



var ary = [1,2,3,"j",true,{}];

for (var i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}
// for in 循环
// 对象中有多少个键值对，那么就循环多少次
// 在 for in循环中，只能通过对象名[属性名]去获取。
// 如果属性名是数字，那么会按照从小到大依次输出，并且是先输出数字.
// for in 可以循环数组
var obj = {
    32: 11,
    name:"马老师",
    牛老师: "键会转字符串",
    age: 20,
    girlFriend: "no",
    12: 32,
    马老师: "没有女朋友"
};

for (var key in obj) { // key 是全局变量
    console.log(key); // 输出的字符串 键
    console.log(obj[key]); // 输出 键的对应值
}


var ary = [3,4,5,6,7,8,3];
for (var key in ary) {
    console.log(key); // 索引
};


// while 循环
/**while : 
 * 1. 阻塞主线程;
 * 2. 不知道循环多少次可以用 while；
 * */

while(循环条件) {
    // 要执行的代码
}
// 举例
var a = 0;
while(a < 4){
    console.log(a);
}
console.log(188); // 永远不会执行

