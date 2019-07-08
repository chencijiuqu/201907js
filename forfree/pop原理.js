// push  shift  unshift  concat  reverse  indexOf  lastIndexOf  join

// slice  splice  sort(function(a,b){return a-b})




/**1.push:已完成
 * 1. 数组末端增加一项或者多项
 * 2. 返回增加后的新长度length
 * 3. 参数：增加的那一项
 * 4. 原数组改变
 */

var ary = [2,4,6,8,10];
Array.prototype.myPush = function () {
    for (var i = 0; i< arguments.length;i++) {
        this[this.length] = arguments[i]
    }
    return this.length
}
var arry = ary.myPush(1)
console.log(ary)


/**2.pop:已完成
 * 1. 数组末端删除一项
 * 2. 返回被删除的那一项
 * 3. 原数组改变
 */

let ary = [1,3,5,7,9];
let ary1 = [1,2,3,4,5,9];
Array.prototype.myPop = function () {
   var total = this[this.length - 1];
   this.length--;
   return total;
};
let r = ary.myPop();
let l = ary1.myPop();
console.log(r,l);

    
/**3.shift:已完成
 * 1. 向数组开头删除一项
 * 2. 无参数
 * 3. 返回值：被删除的那一项
 * 4. 改变
 */
var ary = [1,2,3,4,5,6,7,8,9];
Array.prototype.myShift = function () {
    var total = this[0];
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    this.length--;
    return total;
};
var cur = ary.myShift();
console.log(cur,ary)


/**4.unshift 已完成
 * 1. 作用：给数组开头增加一项，或者多项
 * 2. 参数：要增加的数组项
 * 3. 返回值：返回增加的数组新length
 * 4. 原数组是否改变：是
 */
var ary = [1,2,3,4,5,6,7,8,9]
Array.prototype.myUnshift = function () {
    var total = [];
    for (var i = 0; i < arguments.length;i++) {
        total[i] = arguments[i];
    }
    for (var k = 0 ; k < this.length; k++) {
        total[total.length] = this[k];
        this[k] = total[k]
    }
    console.log(this)
    return this.length;
}
ary.myUnshift(0,1,2);




/**5.concat
 * 1. 作用：拼接数组末端
 * 2. 参数：
 * 3. 返回值：
 * 4. 原数组是否改变：
 */

/**6.reverse
 * 1. 作用：
 * 2. 参数：
 * 3. 返回值：
 * 4. 原数组是否改变：
 */