/*
 * @Description:
  - 手写 `myCall`
  - 手写 `myApply`
  - 手写 `myBind` 基础版
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-11 12:18:17
 */

// 1. 手写 myCall：立即执行，参数一个一个传
Function.prototype.myCall = function (context, ...args) {
  const target = context === null || context === undefined ? globalThis : Object(context)
  const fnKey = Symbol('fn')

  target[fnKey] = this
  const result = target[fnKey](...args)
  delete target[fnKey]

  return result
}

// 2. 手写 myApply：立即执行，参数用数组传
Function.prototype.myApply = function (context, args = []) {
  const target = context === null || context === undefined ? globalThis : Object(context)
  const fnKey = Symbol('fn')

  target[fnKey] = this
  const result = target[fnKey](...args)
  delete target[fnKey]

  return result
}

// 3. 手写 myBind 基础版：不立即执行，返回一个新函数
Function.prototype.myBind = function (context, ...bindArgs) {
  const originFn = this

  return function (...callArgs) {
    return originFn.myApply(context, [...bindArgs, ...callArgs])
  }
}

function introduce(age, city) {
  console.log(`${this.name} ${age} ${city}`)
  return `${this.name}-${age}-${city}`
}

const user = {
  name: 'Alice'
}

console.log('1. myCall 执行结果：')
const callResult = introduce.myCall(user, 18, 'Shanghai')
console.log('myCall 返回值：', callResult)

console.log('2. myApply 执行结果：')
const applyResult = introduce.myApply(user, [20, 'Beijing'])
console.log('myApply 返回值：', applyResult)

console.log('3. myBind 执行结果：')
const bindFn = introduce.myBind(user, 22)
const bindResult = bindFn('Hangzhou')
console.log('myBind 返回值：', bindResult)
