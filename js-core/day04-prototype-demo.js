/*
 * @Description: 
  - 构造函数创建对象
  - 原型方法共享
  - 实例属性覆盖原型属性
  - 原型链查找
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-12 11:00:32
 */

  function Shop(thing) {
      this.amount = 1
      this.thing = thing
    }
  Shop.prototype.number = 100
  Shop.prototype.buy = function (data) {
    this.amount = data
    console.log(`买了 ${this.amount} 个 ${this.thing}！！`);
    }
  const p1 = new Shop('apple');
  const p2 = new Shop('banana');
  p1.number = 0
  
  console.log(p1);
  console.log(`${p1.number}`); // 实例属性覆盖原型属性
  delete p1.number
  console.log(`${p1.number}`); // 原型链查找
  p1.buy(3)

  console.log(p1.__proto__===Shop.prototype); // 实例对象的原型指向构造函数的 prototype
  console.log(p1.buy === p2.buy); // 原型方法共享
  
  console.log(p1.hasOwnProperty('buy')); // buy不是自己的属性
  console.log("buy" in p1); // buy是通过原型链找的
  