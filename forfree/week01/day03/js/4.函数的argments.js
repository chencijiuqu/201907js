

function fn(m,n) {
    console.log(m+n);
}
fn(1,2);



// 十个数的求和
function sum(arguments) {
    // 在函数体中，有个实参集合叫 arguments
    console.log(arguments); // 类数组集合(像数组但不是数组)
    var total = 0; // 记住要在循环外面，如果放在循环体内就会将total覆盖成0，如
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
}
sum(11,2,3,4,5,6,7,2,12,33,43,54,34,23,324,465,667,)


function sum(a,b,c){
    a = 100; // 函数中形参和实参一一映射，当改变形参a的值，arguments也会随着发生变化（但是严格模式的arguments不会改变）
    console.log(arguments); // length 5
    console.log(a,b,c); // 100,2,3
    arguments[0] = 200;
    console.log(a); // 200
}
sum(1,2,3,4,5)






function sum() {
    console.log(arguments); // length：3
    console.log(typeof arguments); // object
};
sum(1,2,3);