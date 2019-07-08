// 数组由 [] 包起来，里面的数组成员用逗号隔开

var a = 12;
var ary = [1,"33",true,NaN,undefined,a]
console.log(ary);

/**数组的定义
 * 1. 开辟一个堆内存空间地址
 * 2. 把数组成员存储到堆内存中
 * 3. 把空间地址赋值给数组名
 * 
 */

/**1. 索引
 * 每一个数组都有一个与之对应的索引，索引从0开始，依次向后排；可以通过索引获取对应的数组成员
 */

var ary1 = [1,"33",true,NaN,undefined,a,12]
console.log(ary[5]); // 
console.log(ary[length]);
/**2. length：代表当前数组成员的个数
 * 
 */

// window 有个 length ，它的值是 0
ary[length]; // 1 相当于 ary[0] 获取 1

// 获取数组最后一项
ary[ary.length - 1];

// 删除数组最后一项
ary.length--;

// 在数组末端增加一项
ary[ary.length] = 122