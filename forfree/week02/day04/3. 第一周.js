var 美元 = "垃圾";
console.log(美元)





/* null
1. id获取元素
2. 哥哥元素节点
3. 获取行间属性
4. 正则捕获不到 */


var ary = [12,213,12,425,12];
console.log(ary[10]); // undefined

function fn(a) {
    for (var i = 0; i < a; i++) {
        if (3 < i < 7) continue; // i=0 -> 3<i<7 - > 3 < i -> false < 7 -> 0 < 7 -> true
        if ( i > 8) return i;
        console.log(i);
    }
}