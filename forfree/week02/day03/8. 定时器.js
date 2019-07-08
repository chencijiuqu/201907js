/**JS中的定时器：
 * 1. setTimeout：隔了一段时间后只执行一次
 * 2. setInterval：每隔一段时间执行一次
 * 清除定时器
 * clearTimeout
 * clearInterval
 */
// 当代码解析到定时器时，浏览器会立即记录一个时间，再经过设置的时间后让定时器的函数执行一次
setTimeout(() => {},1000);
console.log(10); // 10
setInterval(() => {},1000)


// 浏览器有最小的标识时间，谷歌浏览器5-6ms；火狐 8-10ms； IE 14-16ms；

// setTimeout(function (a,b) {},毫秒,实参)


// 定时器的返回值：代表当前定时器在页面中是第几个
// 清除定时器
clearIntervar(id名)



setInterval(() => {
    console.log(100)
    setInterval(() => {
        console.log(3000);
    },3000);
    console.log(5000)
},5000)

