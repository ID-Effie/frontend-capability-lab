/*
 * @Description: 
  构造函数负责创建实例，prototype 负责让实例共享方法，
  实例通过 __proto__ 连接到原型对象，
  属性访问会沿着原型链向上查找，
  而 class 只是这套机制的更现代写法。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-12 09:29:12
 */

function User(name) {
  this.name = name
}

User.prototype.sayHi = function () {
  console.log('你好',this.name);
  
}

const u1 = new User('Alice')
u1.sayHi()

console.log(u1.__proto__ === User.prototype);
console.log(u1.constructor);


class Person{
  constructor(name){
    this.name = name
  }
  sayHi(){
    console.log('你好',this.name);
  }
}
console.log(typeof Person);

const p1 = new Person('baboo');
p1.sayHi()

// myInstanceof 
function myInstanceof(left,right) {
  let proto = Object.getPrototypeOf(left)
  const prototype = right.prototype

  while (proto != null) {
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

const arr = []
const obj = {}

console.log(myInstanceof(arr,Object));
console.log(myInstanceof(arr,Array));
console.log(myInstanceof(arr,Date));


console.log('=========');

console.log(myInstanceof(obj,Object));
console.log(myInstanceof(obj,Array));




