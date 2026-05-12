

console.log("=========")
// const user = {
//   name: 'Alice',
//   sayName: () => {
//     console.log(this.name)
//   }
// }

// user.sayName()


let obj = {
    a:'',
    setA:function (data){
      obj.a=data
      return obj.a
    }
}

let b = obj.setA
console.log('b:',b('ppp'))
console.log('obj.a',obj.setA('jjj'))
console.log('==========')

  const user = {
  name: "Alice",
  sayName() {
    console.log(this)
    console.log(this.name);
  },
};
user.sayName()
const fn = user.sayName;
// fn();

console.log('--------')

function sb() {
  console.log(this.name,this);
  
}

const person = {
  name:'1',
  age:11
}

sb.call(person)

console.log('手写测试');

Function.prototype.myCall = function (context,...args) {
  const target = context===null||context===undefined?globalThis:Object(context)
  const fnKey = Symbol('fn')

  target[fnKey] = this
  const result = target[fnKey](...args)
  delete target[fnKey]
}

sb.myCall(person)

Function.prototype.myBind = function (context,...bindArgs) {
  const result = this

  return function (...callArgs) {
    return result.myCall(context,[...bindArgs,...callArgs])
  }
}

const start = sb.myBind(person)
console.log('myBind');

start ()