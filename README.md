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
- Day 8：TypeScript 基础类型、类型别名与接口
  - `ts-practice/day8-basic-types.ts`
    - 基础类型标注
    - 数组、对象、联合类型
    - 函数参数和返回值类型
  - `ts-practice/day8-type-vs-interface.ts`
    - `type` 和 `interface` 的基础用法
    - 类型组合与接口继承
  - `ts-practice/day8-user-model.ts`
    - 用户模型类型拆分
    - 登录参数、登录结果、用户信息类型
- Day 9：函数类型、泛型与工具函数
  - `ts-practice/day9-study.ts`
    - 函数参数和返回值类型
    - 函数重载认知
    - 泛型基础、泛型约束、默认泛型参数
  - `ts-practice/day9-utils-demo.ts`
    - `pickFields<T>`：从对象中提取指定字段
    - `formatOptions<T>`：把任意列表转成下拉选项
    - `groupBy<T>`：把任意列表按规则分组
    - `safeGet<T>`：安全读取对象字段并保留字段类型
    - `createPageResult<T>`：创建统一分页结果
    - 每个工具函数至少包含 2 个用例
- Day 10：类型收窄、类型守卫与 `keyof`
  - `ts-practice/day10-study.ts`
    - `typeof` 类型收窄
    - `in` 区分联合对象
    - `keyof` 获取对象字段联合类型
    - 类型断言、类型守卫函数、可辨识联合类型
  - `ts-practice/day10-type-guards.ts`
    - 使用 `unknown` 承接不确定数据
    - 编写 `value is User1` 类型守卫函数
    - 使用 `typeof` 收窄 `string | number`
    - 使用 `in` 区分普通用户和管理员用户
  - `ts-practice/day10-keyof-demo.ts`
    - 使用 `keyof` 限制对象字段名
    - 使用 `K extends keyof T` 封装安全取值函数
    - 使用 `TableColumn<T>` 约束表格列配置
  - `ts-practice/day10-union-status.ts`
    - 建立订单状态、审批状态、用户状态联合类型
    - 使用 `Record<Status, string>` 管理状态文案和颜色映射
    - 使用可辨识联合类型区分提交成功和失败结果

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

## Day 8 验证重点

- 能为字符串、数字、布尔值、数组和对象添加基础类型标注
- 能使用联合类型表达有限范围的状态值
- 能为函数参数和返回值添加明确类型
- 能区分 `type` 和 `interface` 的基础使用场景
- 能使用接口继承或类型组合复用已有类型
- 能拆分登录参数、登录结果、用户信息等业务模型
- 能避免把所有字段都写成可选属性或宽泛类型

## Day 9 验证重点

- 能写出带参数类型和返回值类型的函数
- 能说明泛型用于保留输入和输出之间的类型关系
- 能使用 `K extends keyof T` 约束对象字段名
- 能写出 `PageResult<T>` 这类通用分页类型
- 能使用默认泛型参数降低调用成本
- 能避免在工具函数中滥用 `any`
- `pickFields<T>`、`formatOptions<T>`、`groupBy<T>`、`safeGet<T>`、`createPageResult<T>` 均至少有 2 个用例

## Day 10 验证重点

- 能用 `typeof` 对基础联合类型做收窄
- 能用 `in` 区分不同对象联合类型
- 能写出返回 `value is Type` 的类型守卫函数
- 能说明 `keyof T` 会得到对象类型的字段名联合类型
- 能使用 `K extends keyof T` 限制安全取值函数的字段名
- 能用 `TableColumn<T>` 让表格列配置和数据字段保持同步
- 能使用字面量联合类型管理订单、审批、用户状态
- 能使用 `Record<Status, string>` 保证每个状态都有文案或颜色映射
- 能用可辨识联合类型处理成功、失败等不同业务结果

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

TypeScript demo 可以用 `tsc` 做类型检查：

```bash
tsc --noEmit --strict ts-practice/day9-utils-demo.ts
tsc --noEmit --strict ts-practice/day10-study.ts ts-practice/day10-type-guards.ts ts-practice/day10-keyof-demo.ts ts-practice/day10-union-status.ts
```
