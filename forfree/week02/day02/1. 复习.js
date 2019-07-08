/**去重
 *准备一个空对象
 *然后forEach该数组，把数组的每一项赋值给对象
 *然后利用对象属性名不能重复的特点实现去重
 *再准备一个空数组
 *再for in 循环这个对象，把对象的值赋值给这个空数组
 *  */

var ary = [12,3,456,6,12,3,6,12];

ary.forEach(function (item,index,all){
    all[index] = item + 1;
})
console.log(ary);



