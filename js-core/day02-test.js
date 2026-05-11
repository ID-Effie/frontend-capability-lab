/*
 * @Description: 能写出一个闭包计数器
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-09 19:17:25
 */

function sum (){
  let a = 0
  return function back() {
    a++
    return a
  }
}


const sumResult = sum ()

console.log('计算结果：',sumResult)
console.log('计算结果：',sum ())
console.log('计算结果：',sum ()())
console.log('------------')
console.log('计算结果：',sumResult())
console.log('计算结果：',sumResult())
