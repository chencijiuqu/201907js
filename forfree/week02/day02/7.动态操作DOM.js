// 节点类型是属性
// 动态操作DOM的方法(函数)

/**动态操作DOM的方法：
 * 1. 动态创建元素：document.createElement("标签名")
 * 返回值元素对象，
 * 2. 向容器的末端添加一个子元素：父节点.appendChild(要添加的子元素)
 * 3. 删除容器中的子节点：父节点.removeChild(子节点)
 * 4. 替换：replaceChild。语法：document.replaceChild(新节点，原节点)
 * 5. 在父节点中的某个子节点的前面插入新元素：父节点.insertBefore(新节点，原节点)
 * 6. 浅克隆：节点.cloneNode(); 只克隆当前元素，默认false
 * 7. 深克隆：节点.cloneNode(true); 克隆当前元素及后代元素
 * 6. 获取行间属性：节点.getAttribute("属性")
 * 如果行间属性不存在，那么得到的结果是null
 * 7. 设置行间属性：节点.setAttribute("属性名:属性值")
 * 如果设置id，会覆盖原id
 * 8. 删除行间属性：节点.removeAttribute("要删除的属性名");
 *      classList
 * 9. 新增class名：节点.classList.add("新增的class名")
 * 10. 删除class名：节点.classList.remove("要删除的class名")
 * 11. 替换class名：节点.classList.replace("原class名","新class名")
 */

var a = document.getElementById('a');
a.index = 100; // 不是行间属性
a.getAttribute("index"); // null
console.log(a.b); // undefined 


