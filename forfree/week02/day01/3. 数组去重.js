// 数组去重法(原数组不改变)
var ary = [12,3,12,5,6,3,12,8,6];
var newAry = [];
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    if (newAry.indexOf(cur) === -1) {
        newAry.push(cur);
    }
}
console.log(newAry); // [12,3,5,6,8]


// 对象去重法(原数组不改变)
var ary = [12,3,12,5,6,3,12,8,6];
var obj = {};
var newAry = [];
ary.forEach(function (item) {
    obj[item] = item;
})
var i = 0;
for (var key in obj) {
    newAry[i] = obj[key];
    i++;
}
console.log(obj);
console.log(newAry); // [3,5,6,8,12]


// 原数组删除项去重法(缺点：数组塌陷)
var ary = [12,3,12,5,6,3,12,8,6];
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var item = ary[i];
    if(obj[item] === item) {
        ary.splice(i,1)
        i--;
        continue; // 如果不加比较耗性能
    }
    obj[item] = item;
};
console.log(ary);


// 原数组覆盖去重法(解决数组塌陷问题)
var ary = [12,3,12,5,6,3,12,8,6];
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var item = ary[i];
    if(obj[item] === item) {
        ary[i] = ary[ary.length - 1];
        ary[length]--;
        i--;
        continue; // 如果不加比较耗性能
    }
    obj[item] = item;
};
console.log(ary); // []




// ary.length 和 ary.length-- 的区别






var ary = [12,3,12];

// ?var ary = [12,3,12,12,3,4,5,6]
var obj={};
for(var i=0;i<ary.length;i++){
    var cur = ary[i];
    if(obj[cur]===cur){
        var e = ary.pop(); // 先把最后一项删掉
        ary[i]=e; // 再把最后一项添加
        i--;
        continue
    }
    obj[cur]=cur
}
console.log(ary);
