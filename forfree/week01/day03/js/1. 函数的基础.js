/**function : 方法、功能
 * 函数的封装：减少代码的冗余，实现了代码高内聚，低耦合
 * 
 */
function fn(a,b) { 
    var num = 1;
    console.log(num);
    return a - b;
};

fn();







var ary = [12,23,556,78,8,9];
var len = ary.length;
for (var i= 0; i <len; i++) {
    // 用于ary固定值的时候
}
for (var i= 0; i <ary.length; i++) {
    // 用于ary可变的时候
}