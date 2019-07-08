// Math 是引用数据类型

/**Matg方法
 * 1. abs：取绝对值 语法：Math.abs(-1); // 1
 * 2. min：取一组数字的最小值；语法：Math.min(12,32,45); // 12
 * 3. max：取一组数字的最大值：语法：Math.max(12,33,22); // 33
 * 4. ceil：向上取整
 * 5. floor：向下取整  语法：Math.floor(-22.11)； // -23
 * 6. round：四舍五入  语法：Math.round(4.49); // 4 负数五舍六入
 * 7. random：取一个0-1但不包含1的随机小数    语法：Math.random
 * 8. pow：取m的n次方     语法：Math.pow(m,n); 
 * 9. sqrt：开平方        语法：Math.sqrt(16)
 * 10. 
 * 11. 
 * 12. 
 * 13. 
 */

Math.abs(-2); // 2
Math.min(12,33,-21,0,12,-12,-22,-21,-1); // -22
Math.max(12,32,1,2,-12,-324); // 32
Math.ceil(12.55); // 13
Math.ceil(-12.55); // -12
Math.floor(-12.55); // -13
Math.floor(12.55); // 12
Math.round(12.55); // 13
Math.round(12.49); // 12
Math.round(-12.49); // -12
Math.round(-12.55); // -13
Math.random();
Math.pow(2,2); // 4
Math.sqrt(12);



// 获取数组一个最小值：
var min = ary.sort((a,b) => a - b)[0];




// 求一个50 - 80的随机整数
Math.random() * (80 - 50); // 0 - 30(不包含30)
Math.random() * (80 - 50) + 50; // 50 - 80(不包含80)
Math.round(Math.random * (80 - 50) + 50); // 50 - 80
// ceil，80取不到，floor，50取不到
Math.round(Math.random * (m - n) + n);