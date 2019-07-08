// Date 是一个函数；new Date(); 在函数执行的前面加上new，那是Date的实例
var date = new Date();
console.log(date);
var deta = new Date;
console.log(deta);

new Date() // 获取的本机系统时间

/**
 * 1. getFullYear()：获取当前时间的年份
 * 2. getMonth：获取月份【0-11,0是一月，11是十二月】
 * 3. getDate：获取日期(x号)【1-31】
 * 4. getDay：获取星期【0-6,0代表星期日】
 * 5. getHours：获取小时【0-23,0是24点】
 * 6. getMinutes：获取分钟【0-59】
 * 7. getSeconds：获取秒【0-59】
 * 8. getMilliseconds：获取毫秒
 * 9. getTime：获取时间戳【距离1970年一月一日上午八点(中国区八点，格林威治时间是零点)的毫秒差】
 * Date.now()：获取当前时刻的时间戳
 */
// 24小时 = 3600秒;
