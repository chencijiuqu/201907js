/**求出里面所有数字的和
 * 1. arguments循环求和
 * 2. 用变量接收一下计算的和
 * 3. 判断选出是数字的实参
 */

// 不接收非数字的值
function sum() {
    var total = null;
    var cur = arguments[i];
    for(var i = 0; i < arguments.length; i++) { // 每次循环只能获取其中一个值
        if (typeof cur === 'number' && !isNaN(cur)) {
        // isNaN：false，说明数字
            total += cur;
        }
    }
    return total;
}
sum(12,89,"67",null,undefined,[],"3px",35,NaN);



// 接收非数字且能转换成数字的值
function sum() {
    var total = null; 
    cur = Number(arguments[i]);
    for (var i = 0; i < arguments.length; i++) {
       if(!isNaN(cur)) {
           total += cur;
       }
    }
    return total;
}
sum(12,89,"67",null,undefined,[],"3px",35,NaN);

