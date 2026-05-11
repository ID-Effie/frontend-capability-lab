/*
 * @Description:  
  - 普通函数调用
  - 对象方法调用
  - 对象方法赋值后的丢失问题
  - 箭头函数对比
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-11 11:30:40
 */

  let initialValue = 50
  // 1.普通函数调用
  function fn1(){
    return this
  }
  console.log('1.普通函数调用-this指向：',fn1())

// 对象方法调用
  const calculate = {
    data :10,
    multiply:function () {
      let num = this.data
      return num*num
    },
    arrowFunction: ()=> {
      return this
    }
  }
console.log('2.对象方法调用-this指向：',calculate.multiply())

// 3.对象方法赋值后的丢失问题
  const lose = calculate.multiply
  // console.log('3.对象方法赋值后的丢失问题',lose())

// 4.对象里的普通函数 / 箭头函数对比
    console.log('4.箭头函数对比-this指向：',calculate.arrowFunction())