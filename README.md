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
- Day 11：Axios 响应类型与请求层建模
  - `ts-practice/day11-api-response.ts`
    - 定义统一响应结构 `ApiResponse<T>`
    - 定义接口错误结构 `ApiError`
  - `ts-practice/day11-request-generic.ts`
    - 使用 `AxiosRequestConfig` 扩展项目请求配置 `RequestConfig`
    - 封装泛型请求函数 `request<T>()`
    - 练习登录接口、用户列表接口、删除用户接口、修改状态接口
    - 拆分请求参数类型和响应结果类型
  - `ts-practice/day11-study.ts`
    - 梳理 `AxiosResponse<T>`、`ApiResponse<T>`、`Promise<ApiResponse<T>>`
    - 说明 `params`、`data`、`mockData` 的职责区别
- Day 12：Vue 组件中的 TypeScript
  - `vue-demos/vue-ts-basic/UserCard.vue`
    - 使用 `defineProps` 定义用户卡片输入类型
    - 使用 `defineEmits` 定义 `select`、`delete` 事件参数类型
  - `vue-demos/vue-ts-basic/UserCard-Farhter.vue`
    - 演示父组件传入 `User` 数据
    - 演示父组件接收子组件事件并使用明确参数类型
  - `vue-demos/vue-ts-basic/SearchForm.vue`
    - 使用 `ref<SearchParams>` 管理搜索表单状态
    - 使用 `defineEmits` 定义 `search`、`reset` 事件
    - 使用 `defineExpose` 暴露重置方法
  - `vue-demos/vue-ts-basic/SearchForm-Farther.vue`
    - 使用 `InstanceType<typeof SearchForm>` 定义组件实例引用
    - 演示父组件调用子组件暴露方法
  - `vue-demos/vue-ts-basic/SimplePagination.vue`
    - 使用 props 定义分页参数
    - 使用 emits 定义分页变化事件
    - 使用 `computed` 计算总页数
  - `vue-demos/vue-ts-basic/day12-study.vue`
    - 作为 Vue 组件 TypeScript 学习草稿，整理 `defineProps`、`defineEmits`、`ref<T>`、`computed<T>`、模板引用类型和 `defineExpose`
- Day 13：Pinia、表单与表格类型实践
  - `ts-practice/day13-pinia-store-types.ts`
    - 使用 `defineStore` 练习 Pinia store 类型
    - 定义 `AuthState`、`UserInfo`
    - 给 `state`、`getters`、`actions` 补明确类型
    - 使用 `Partial<Pick<...>>` 练习部分字段更新
  - `ts-practice/day13-form-model.ts`
    - 定义 `UserFormModel` 和 `CreateUserParams`
    - 定义 `CustomerFormModel` 和 `CreateCustomerParams`
    - 定义 `OrderFormModel` 和 `CreateOrderParams`
    - 对比表单 model 和接口 params 不能直接复用的字段
  - `ts-practice/day13-table-row.ts`
    - 定义 `CustomerRow` 和 `OrderRow`
    - 使用数组类型管理表格数据
    - 使用 `TableColumn<T>` 和 `keyof T` 约束列配置字段
    - 给行编辑、删除函数补 row 参数类型
- Day 15：Vue 3 `script setup`、`ref` 与 `reactive`
  - `vue-demos/day15-ref/reactive-demo.vue`
    - 使用 `script setup lang="ts"` 编写 Vue 3 单文件组件
    - 使用 `ref` 完成计数器状态
    - 使用 `reactive<User>` 管理用户信息编辑状态
    - 使用 `ref<User[]>` 管理用户列表
    - 通过 `v-model` 验证响应式对象字段更新
    - 添加用户时使用 `{ ...user }` 保存当前表单快照，避免列表项继续引用同一个响应式对象
    - 通过列表渲染对比 `ref` 列表状态和 `reactive` 对象状态
  - `index.html`、`src/main.ts`、`src/App.vue`、`vite.config.ts`
    - 补齐 Vite + Vue 浏览器运行入口
    - 在 `App.vue` 中挂载 `reactive-demo.vue`
    - 支持通过本地 Vite 服务查看 Day 15 demo
- Day 16：Vue 3 `computed`、`watch` 与 `watchEffect`
  - `vue-demos/day16-computed-watch-watchEffect/product-price-calculation.vue`
    - 使用 `computed` 根据商品单价、数量、优惠金额计算原价和优惠后价格
    - 验证 `computed` 适合处理由响应式状态推导出来的展示值
  - `vue-demos/day16-computed-watch-watchEffect/Watch-search-conditions.vue`
    - 使用搜索关键词、状态和页码作为查询条件状态
    - 使用 `computed` 生成查询条件摘要
    - 使用 `watch` 监听明确的数据源并模拟列表请求
    - 对比 `watch` 可以拿到新值和旧值，触发条件更可控
  - `vue-demos/day16-computed-watch-watchEffect/Auto-save-form-drafts.vue`
    - 使用表单草稿状态练习自动保存场景
    - 使用 `watch` / `watchEffect` 对比副作用触发方式
    - 验证副作用应放在 `watch` 或 `watchEffect` 中，而不是写进 `computed`
  - `src/App.vue`
    - 通过切换导入的 demo 组件查看 Day 16 不同示例

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

## Day 11 验证重点

- 能解释 `AxiosResponse<T>` 中的泛型表示 `res.data` 的类型
- 能解释 `ApiResponse<T>` 是后端统一响应外壳，`T` 是业务数据类型
- 能写出返回 `Promise<ApiResponse<T>>` 的泛型请求函数
- 能区分 `params` 是 URL 查询参数，`data` 是请求体 body
- 能把登录、列表、删除、修改状态接口的请求参数和响应结果分开定义
- 能使用 `AxiosRequestConfig` 扩展项目自己的 `RequestConfig`
- `day11-request-generic.ts` 能通过 TypeScript 类型检查

## Day 12 验证重点

- 能使用 `defineProps` 给组件输入数据补类型
- 能使用 `defineEmits` 给组件事件名和事件参数补类型
- 能使用 `ref<T>` 定义表单状态、列表状态和组件实例引用
- 能使用 `computed` 计算分页总页数
- 能使用 `InstanceType<typeof Component>` 定义组件实例 ref
- 能理解 `defineExpose` 只暴露父组件需要调用的方法
- 用户卡片、搜索表单、分页组件简化版均已完成 Vue + TS demo
- `vue-tsc` 能通过 `.vue` 文件类型检查

## Day 13 验证重点

- 能说明 Pinia store 中 `state`、`getters`、`actions` 各自负责什么
- 能为 store 定义完整的 `State` 类型，并让 `state` 返回值使用该类型
- 能为 action 参数和返回值补明确类型，例如 `LoginParams`、`Promise<void>`
- 能说明登录状态为什么适合统一放到 store，而不是散落在登录页
- 能区分表单 model 和接口 params，知道哪些字段不能直接复用
- 能写出用户表单、客户表单、订单表单的 model 类型
- 能写出客户行数据、订单行数据的 row 类型
- 能使用 `TableColumn<T>` 和 `keyof T` 约束表格列配置
- 能使用 `Partial<T>` 或 `Partial<Pick<T, K>>` 表达局部更新
- `day13-pinia-store-types.ts`、`day13-form-model.ts`、`day13-table-row.ts` 能通过 TypeScript 类型检查

## Day 15 验证重点

- 能说明 `script setup` 为什么不需要手动 `return`
- 能说明 `ref` 在脚本中需要 `.value`，在模板中会自动解包
- 能说明 `reactive` 适合管理表单、查询条件这类对象状态
- 能区分单个值、列表状态和对象状态分别适合用 `ref` 还是 `reactive`
- 能通过计数器验证 `ref` 状态更新
- 能通过用户信息编辑验证 `reactive` 对象字段更新
- 能说明为什么添加用户列表时要使用 `{ ...user }` 保存快照
- 能通过 Vite 在浏览器中打开 `reactive-demo.vue`

## Day 16 验证重点

- 能说明 `computed` 用于根据响应式数据推导新值，并且会基于依赖缓存结果
- 能说明 `computed` 默认只读，也可以通过 `get/set` 写成可写计算属性
- 能说明为什么 `computed` 不适合发请求、写缓存、修改其他响应式状态等副作用
- 能使用 `computed` 完成商品价格计算和查询条件摘要
- 能使用 `watch` 监听单个 `ref`、getter、多个来源组成的数组
- 能说明监听 `reactive` 对象字段时推荐使用 getter，例如 `() => query.keyword`
- 能使用 `watch` 的 `immediate` 选项在侦听器创建时立即执行一次
- 能说明 `deep` 深度监听的作用和性能成本
- 能使用 `watch` 模拟搜索条件变化后的列表请求
- 能说明 `watchEffect` 会立即执行，并自动追踪同步执行期间访问到的响应式依赖
- 能区分 `watch` 和 `watchEffect`：前者手动指定监听源，后者自动收集依赖
- 能删除或改正把副作用写进 `computed` 的错误示例

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

Day 11 已配置本地类型检查脚本：

```bash
pnpm typecheck
```

Day 12 Vue demo 使用 `vue-tsc` 检查 `.vue` 文件类型：

```bash
pnpm exec vue-tsc -p tsconfig.app.json --noEmit
```

Day 13 TypeScript demo 可以单独检查：

```bash
pnpm exec tsc --noEmit --strict --moduleResolution Bundler --module ESNext --target ES2020 --ignoreConfig ts-practice/day13-pinia-store-types.ts ts-practice/day13-form-model.ts ts-practice/day13-table-row.ts
```

Day 15 Vue demo 可以通过 Vite 在浏览器中查看：

```bash
pnpm exec vite --host 127.0.0.1
```

启动后访问 Vite 输出的本地地址，例如：

```text
http://127.0.0.1:5173/
```

Day 16 Vue demo 也通过同一个 Vite 入口查看。需要切换示例时，修改 `src/App.vue` 中导入的组件：

```ts
// 商品价格计算
// import ReactiveDemo from "../vue-demos/day16-computed-watch-watchEffect/product-price-calculation.vue";

// 搜索条件监听
// import ReactiveDemo from "../vue-demos/day16-computed-watch-watchEffect/Watch-search-conditions.vue";

// 表单草稿自动保存
// import ReactiveDemo from "../vue-demos/day16-computed-watch-watchEffect/Auto-save-form-drafts.vue";
```
