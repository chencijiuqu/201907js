/**
 * 作者:小青龙
 * 邮箱:chencijiuqu@qq.com
 * 日期:2019/6/28
 */

// 1. 判断实参是不是一个有效数字，
// 加
function add(m,n) {
    var total = "实参不是一个有效数字";
    if (typeof n === "number" && typeof m === "number") {
        if (parseInt(m) && parseInt(n)) {
            total = m + n;
        }
    }
    return total
};

// 减
function minus(m,n) {
    var total = "实参不是一个有效数字";
    if (typeof n === "number" && typeof m === "number") {
        if (parseInt(m) && parseInt(n)) {
            if ( m > n) {
                total = m - n;
            } else {
                total = n - m;
            }

        }
    }
    return total
};

// 乘
function multiply(m,n) {
    var total = "实参不是一个有效数字";
    if (typeof n === "number" && typeof m === "number") {
        if (parseInt(m) && parseInt(n)) {
            total = m * n;
        }
    }
    return total
};

// 除
function division(m,n) {
    var total = "实参不是一个有效数字";
    if (typeof n === "number" && typeof m === "number") {
        if (parseInt(m) && parseInt(n)) {
            total = m / n;
        }
    }
    return total
};

num(12,22);
num("12px",12);
num(NaN,12);
num("12px",[1]);

// 1.1 加减乘除
function num(m,n) {
    var total = "实参不是一个有效数字";
    var cur = parseInt(m);
    var eur = parseInt(n);
    if (typeof m === "number" && typeof n === "number") {
        if (cur && eur) {
            var add = m + n;
            var chu = m / n;
            var jian = m - n;
            var cheng = m * n;
            console.log("加法:",add);
            console.log("减法:",jian);
            console.log("乘法:",cheng);
            console.log("除法:",chu);
            return ;
        }
    }
    return total;
}


// 2. 判断一个年份是平年还是闰年
function year(num) {
   return (num / 4 === 0 && num / 100 !== 0) || num % 400 === 0 ? "闰年" : "平年";
} 

// 3.判断一个数 是奇偶数
function sum(num) {
    return num % 2 === 0 ? "偶数" : "奇数"
};
sum(2)

// 4. 判断一个数 是正负数
function sum(num) {
    if (num > 0) {
        return "正数";
    } else if ( num < 0) {
        return "负数"
    }
    return "0即不是正数也不是负数"
}

// 5. 输入三个数，求和
function sum(n,m,x) {
    if (typeof n === "number" && typeof m === "number" && typeof x === "number") {
        if(!isNaN (n) && !isNaN(m) && !isNaN(x)) {
            var total = n + m + x;
            return alert(total);
        };
    };
    return alert("其中有非有效数字");
}

// 6. 按照编号，已知加油量，求价格
function petrol(serial,num) {
    if (serial === 92) {
        if (Number(num) >= 20) {
            var total = num * 5.9;
            return `价格：${total}`;
        } else if (num === undefined) {
            return alert("未输入加油量");
        } else if (Number(num) <= 20){
            var total = num * 6;
            return `价格：${total}`;
        } else {
            return alert("请输入正确的加油量")
        }
    } else if (serial === 97) {
        if (Number(num) >= 30) {
            var total = num * 6.95;
            return `价格：${total}`;
        } else if (num === undefined) {
            return alert("未输入加油量");
        } else if (Number(num) <= 30) {
            var total = num * 7;
            return `价格：${total}`;
        } else {
            return alert("请输入正确的加油量")
        }
    } else {
        return alert("请输入正确的编号");
    }
}

// 7. 输入月份显示当月天数

function months(num) {
    switch (num) {
        case 1:
            console.log(31);
            break;
        case 2:
            console.log(28,29);
            break;
        case 3:
            console.log(31);
            break;
        case 4:
            console.log(30);
            break;
        case 5:
            console.log(31);
            break;
        case 6:
            console.log(30);
            break;
        case 7:
            console.log(31);
            break;
        case 8:
            console.log(31);
            break;
        case 9:
            console.log(30);
            break;
        case 10:
            console.log(31);
            break;
        case 11:
            console.log(30);
            break;
        case 12:
            console.log(31);
            break;
    }
    if (num === 0 || num > 12) console.log("请输入正确月份");

}

// 8. 0-6 判断哪天工作日，休息日
function day(num) {
    switch (num) {
        case 0:
            console.log("星期一:工作日");
            break;
        case 1:
            console.log("星期二:工作日");
            break;
        case 2:
            console.log("星期三:工作日");
            break;
        case 3:
            console.log("星期四:工作日");
            break;
        case 4:
            console.log("星期五:工作日");
            break;
        case 5:
            console.log("星期六:休息日");
            break;
        case 6:
            console.log("星期日:休息日");
            break;
    }
    if (num > 6) {
        console.log("请输入正确的星期")
    }
}
day(1)
