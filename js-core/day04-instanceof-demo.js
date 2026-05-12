/*
 * @Description: 手写 myInstanceof,myInstanceof 至少覆盖普通对象和数组测试 
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-12 14:16:23
 */

  // left 是待判断对象 right 是构造函数
  function myInstanceof(left,right) {
    let proto = left.__proto__ // Object.getPrototypeOf(left) === left.__proto__
    const cons = right.prototype
    
    while (proto != null) {
      if (proto === cons) {
        return true
      }
      proto = Object.getPrototypeOf(proto)
    }
    return false
  }

  const obj = {}
  const arr = []

  console.log(myInstanceof(obj,Object));
  console.log(myInstanceof(obj,Array));
  
  console.log(myInstanceof(arr,Object));
  console.log(myInstanceof(arr,Array));
  console.log(myInstanceof(arr,Date));
  
  
  
  
