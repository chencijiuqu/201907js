"<img src=''>"+name+"</img>"


/**字符串常用方法
 * 1. toUpperCase：小写字母转大写字母  变量.toUpperCase()
 * 2. toLowerCase：大写字母转小写字母  变量.toLowerCase()
 * 3. casrAt：通过索引获取对应的字符 ，语法：变量.charAt(索引)
 * 4. charCodeAt：获取当前字符对应的uniCode编码值   语法：变量.charCodeAt(索引)
 * 5. substr：从索引x截取y个  语法：变量.substr(索引,个数)
 * 6. substring：从索引x开始截取到索引y，但不包含y 语法：变量.substring(开始索引,结束索引)，如果第二个参数是负数，就会从索引m开始向前截取，但不包含m
 * 7. slice：从索引x开始截取到索引y但不包含y，如果第二个参数是负数，就是length + 负数
 * 8. indexOf：检测字符在字符串中出现的索引位置
 * 9. lastIndexOf：检测字符在字符串中最后一次出现的索引位置
 * 10. concat：字符串拼接
 * 11. split：将字符串按照特点的字符分隔成数组每一项  语法：变量.split("分隔符")
 * 12. replace：字符串替换   语法：变量.replace(old,new)
 * 13. trim：去首尾空格
 * 14. trimLeft：去左空格
 * 15. trimRight：去右空格
 */

var str1 = "2019/07/03 12:45:30";
var ary = str1.split(" ");
var a = ary[0].split("/");
var b = ary[1].split(":");
var c = a.concat(b);
console.log(c);

var str1 = "2019/07/03 12:45:30";
str1.split("/").toString().split(" ").toString().split(":").toString().split(",")