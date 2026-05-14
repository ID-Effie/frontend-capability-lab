# Frontend Capability Lab

前端核心能力强化仓库，用于练习 JavaScript、TypeScript、Vue、工程化和面试表达。

## 目录说明

- js-core：JavaScript 核心原理练习
- ts-practice：TypeScript 类型练习
- vue-demos：Vue 小 demo
- engineering：前端工程化练习
- interview-notes：面试题与口述稿

## 第 1 周目标

- 作用域与闭包
- this、call、apply、bind
- 原型链
- Promise
- 事件循环
- 防抖与节流

## 当前进度

- Day 1：JavaScript 基础语法回顾
- Day 2：作用域与闭包
- Day 3：`this`、`call`、`apply`、`bind`
- Day 4：原型链、构造函数、`class`、`instanceof`
- Day 5：Promise、`async/await` 与错误处理
  - `js-core/day05-promise-demo.js`
    - Promise 成功链式调用
    - Promise 错误传播
    - `finally` 执行时机
    - `async/await + try/catch`
  - `js-core/day05-request-mock.js`
    - 模拟请求成功
    - 模拟请求失败
    - 模拟 loading 状态
- Day 6：事件循环、防抖与节流
  - `js-core/day06-event-loop-demo.js`
    - `console.log` 同步执行顺序
    - `setTimeout` 宏任务
    - `Promise.then` 微任务
    - `async/await` 后续代码进入微任务
  - `js-core/day06-debounce-throttle.js`
    - 手写 `debounce`
    - 手写 `throttle`
    - 用连续函数调用模拟输入场景
    - 用 `setInterval` 模拟高频滚动触发

## Day 5 验证重点

- 能解释 Promise 三种状态以及状态不可逆
- 能说明 Promise 链式调用中每个 `then` 的返回值如何传递
- 能说明错误如何沿着 Promise 链传播到 `catch`
- 能使用 `finally` 做请求收尾逻辑
- 能用 `async/await + try/catch/finally` 写出异步错误处理
- 能写出包含成功、失败、loading 状态的 mock 请求函数

## Day 6 验证重点

- 能区分调用栈、宏任务队列、微任务队列
- 能判断 `console.log`、`setTimeout`、`Promise.then`、`async/await` 的输出顺序
- 能说明 `Promise.resolve()` 本身是同步创建 Promise，`.then` 回调才是微任务
- 能解释 `await` 后面的代码为什么会延后执行
- 能手写基础版 `debounce`
- 能手写基础版 `throttle`
- 能说明防抖适合输入搜索、表单校验、窗口 resize 等场景
- 能说明节流适合滚动监听、鼠标移动、拖拽、高频点击等场景

## 使用方式

每个 demo 文件可以直接用 Node.js 运行，例如：

```bash
node js-core/day-01-basic.js
```

Day 5 demo 可以这样运行：

```bash
node js-core/day05-promise-demo.js
node js-core/day05-request-mock.js
```

Day 6 demo 可以这样运行：

```bash
node js-core/day06-event-loop-demo.js
node js-core/day06-debounce-throttle.js
```
