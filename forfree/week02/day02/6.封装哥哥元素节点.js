var third = document.getElementById("third");
// console.log(third.previousElementSibing); // undefined
function getBrother(curEle) {
    if ( "previousElementSibling" in curEle) {
        return curEle.previousElementSibing;
    }
    // prevviousSibling:兼容所有的浏览器
    var bro = curEle.previousSibling;
    while (bro) {
        if (bro.nodeType === 1) {
            return bro;
        }
            bro = bro.previousSibling;
    }
    return bro;
}
console.log(getBrother(third));