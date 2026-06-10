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
- Day 17：Vue 生命周期与组件通信
  - `vue-demos/day17-生命周期与组件通信/UserFormParent.vue`
    - 父组件使用 `ref` 管理用户名状态
    - 通过 `props` 把 `username` 传给子组件
    - 监听子组件 `updateName`、`submit` 事件完成表单更新和提交
  - `vue-demos/day17-生命周期与组件通信/UserForm.vue`
    - 使用 `defineProps` 接收 `username`
    - 使用 `defineEmits` 声明 `updateName`、`submit` 事件
    - 验证子组件不直接修改父组件状态，而是通过事件通知父组件
  - `vue-demos/day17-生命周期与组件通信/OrderInfoParent.vue`
    - 父组件维护订单数据和支付、取消订单动作
    - 通过 `props` 向订单详情子组件传入订单对象
  - `vue-demos/day17-生命周期与组件通信/OrderInfo.vue`
    - 使用订单对象 props 渲染订单详情
    - 通过 `pay(orderId)`、`cancel(orderId)` 事件把用户操作交还给父组件处理
  - `vue-demos/day17-生命周期与组件通信/ThemePanelRoot.vue`
    - 使用 `provide` 提供主题状态和切换主题方法
    - 提供响应式 `ref` 时，后代组件注入类型需要写成 `Ref<T>`
  - `vue-demos/day17-生命周期与组件通信/ThemePanel.vue`
    - 使用 `inject` 注入主题状态和切换方法
    - 验证 `provide / inject` 适合跨层级共享主题、权限、用户信息等上下文
	- Day 18：Vue 插槽与业务组件封装
	  - `vue-demos/day18-slot/BaseCard.vue`
	    - 使用默认插槽承载卡片主体内容
    - 使用 `title` 具名插槽承载卡片标题
    - 使用 `extra` 具名插槽承载卡片右侧操作
  - `vue-demos/day18-slot/BaseList.vue`
    - 使用 `list` props 接收列表数据
    - 子组件负责 `v-for` 循环列表
    - 通过作用域插槽 `:item="item"` 把当前列表项暴露给父组件
    - 父组件决定每一项具体如何渲染
  - `vue-demos/day18-slot/BaseTable.vue`
    - 使用 `data` props 接收表格数据
    - 通过 `actions` 具名作用域插槽暴露当前行 `row`
    - 演示后台项目表格操作列中“结构固定、按钮变化”的典型场景
	  - `vue-demos/day18-slot/SlotDemo.vue`
	    - 引入并测试 `BaseCard`、`BaseList`、`BaseTable`
	    - 验证默认插槽、具名插槽、作用域插槽在同一个页面中的使用方式
	- Day 19：Vue 3 组合式函数 composable
	  - `vue-demos/day19-composable/usePagination.ts`
	    - 使用 `ref` 管理 `currentPage`、`pageSize`、`total`
	    - 使用 `computed` 推导 `totalPages`
	    - 提供 `setPage`、`setPageSize`、`setTotal`、`reset` 方法
	  - `vue-demos/day19-composable/useModal.ts`
	    - 管理弹窗 `visible`、`mode`、`current`
	    - 提供 `openCreate`、`openEdit`、`close` 方法
	    - 支持通过泛型约束当前编辑数据类型
	  - `vue-demos/day19-composable/useLoading.ts`
	    - 管理请求 loading 状态
	    - 提供 `start`、`stop`、`toggle` 方法
	  - `vue-demos/day19-composable/day19-composable-Demo.vue`
	    - 在同一个页面中验证 `usePagination`、`useModal`、`useLoading`
	    - 通过按钮操作验证每个 composable 的状态和方法返回值
	- Day 20：Vue 自定义指令与权限 demo
	  - `src/day20-directives/focus.ts`
	    - 实现 `v-focus`，在元素挂载后自动聚焦
	    - 验证 DOM 行为适合用自定义指令封装
	  - `src/day20-directives/copy.ts`
	    - 实现 `v-copy`，点击元素后通过 `navigator.clipboard.writeText` 复制文本
	    - 使用 `try/catch` 处理复制失败
	    - 使用 `_copyHandler` 保存事件函数引用，并在 `unmounted` 中移除监听
	    - 使用 `_copyValue` 和 `updated` 保证指令值变化后复制最新文本
	  - `src/day20-directives/permission.ts`
	    - 实现 `v-permission`，根据模拟权限列表控制按钮展示
	    - 验证前端权限指令只能控制展示，不能替代后端鉴权
	  - `src/day20-directives/index.ts`
	    - 统一注册 `focus`、`copy`、`permission` 三个全局指令
	  - `src/day20-directives/directive-Demo.vue`
	    - 在同一个页面中验证自动聚焦、复制文本和按钮权限展示
- Day 22：Vite 项目骨架、环境变量与路径别名 demo
  - `src/day22-vite-env-demo/config/env.ts`
    - 使用 `import.meta.env` 读取 Vite 环境变量
    - 统一整理 `apiBaseUrl`、`title`、`mode`、`isDev` 等环境信息
  - `src/day22-vite-env-demo/utils/message.ts`
    - 使用 `@` 路径别名导入工具模块
    - 验证 Vite 和 TypeScript 都能识别 `@`
  - `vite.config.ts`
    - 配置 `@` 指向 `src`
  - `.env.development`
    - 管理开发环境下的接口地址和应用标题
- Day 23：Vue Router、嵌套路由、路由守卫与 `meta`
  - `src/router/index.ts`
    - 使用 `createRouter` 和 `createWebHistory` 建立路由实例
    - 配置 `/login`、`/dashboard`、`/user`、`/403`、404 通配路由
    - 使用 `meta.title`、`meta.requiresAuth`、`meta.permission` 描述页面业务属性
    - 使用 `beforeEach` 验证登录拦截、权限拦截和页面标题设置
  - `src/layouts/BaseLayout.vue`
    - 作为后台布局父路由组件
    - 通过 `RouterLink` 和 `RouterView` 验证嵌套路由
  - `src/views/login/index.vue`
    - 提供 mock 登录入口，写入 demo token 后跳回来源页面
  - `src/views/dashboard/index.vue`
    - 验证登录后可访问的首页子路由
  - `src/views/user/index.vue`
    - 验证缺少 `user:list` 权限时跳转 `/403`
  - `src/views/error/403.vue`、`src/views/error/404.vue`
    - 验证无权限和未匹配路由的异常页兜底
- Day 25：Axios 请求封装 demo
  - `day25-request-wrapper-demo/src/request-wrapper.ts`
    - 使用 `axios.create()` 创建统一请求实例
    - 使用请求拦截器在请求发出前注入 token
    - 使用响应拦截器统一处理业务错误、401、500 和网络错误
    - 保持页面调用侧只关心接口结果，不重复处理全局错误逻辑
  - `day25-request-wrapper-demo/src/mock.ts`
    - 使用 `axios-mock-adapter` 模拟成功响应、业务失败、401、500
    - 验证 mock 响应可以触发请求封装中的不同处理分支
  - `day25-request-wrapper-demo/src/main.ts`
    - 依次请求成功、业务错误、401、500 四类接口
    - 使用 `try/catch` 验证错误能被调用方捕获
    - 通过浏览器控制台观察请求层处理结果
- Day 26：ESLint、Prettier 与代码规范认知
  - `ts-practice/day26-lint-prettier.ts`
    - 记录一次格式化前后的代码对比
    - 练习把松散代码交给 Prettier 统一格式
    - 练习通过 TypeScript / ESLint 思路发现未使用变量、类型问题和潜在代码质量问题
    - 理解 ESLint 负责代码质量，Prettier 负责代码格式
    - 为主项目配置 husky、lint-staged 和 commit message 规范打基础
- Day 27：权限骨架、菜单过滤与按钮权限 demo
  - `src/stores/user.ts`
    - 在用户信息中加入 `roles` 和 `permissions`
    - 通过 getter 统一暴露当前角色和权限点
    - 将 mock 用户信息同步到 `localStorage`，验证刷新后恢复权限状态
  - `src/views/login/index.vue`
    - 提供管理员、编辑员、访客三个 mock 登录入口
    - 登录后自动跳转到来源页或 `/dashboard`
    - 页面显示当前 token 和当前用户，方便观察登录状态变化
  - `src/layouts/BaseLayout.vue`
    - 使用菜单配置生成侧边栏
    - 根据当前用户角色和权限过滤可见菜单
    - 支持退出登录并清理当前用户状态
  - `src/router/index.ts`
    - 通过 `meta.roles` 和 `meta.permission` 控制页面访问权限
    - 未登录跳 `/login`，无权限跳 `/403`
  - `src/day20-directives/permission.ts`
    - 将按钮权限指令改为读取 `userStore.permissions`
    - 用户管理页通过 `v-permission` 验证新增、编辑、删除按钮显示差异
- Day 29：RBAC 权限模型 demo
  - `src/day29-rbac-demo/types.ts`
    - 定义 `RoleCode`、`PermissionCode`、`User`、`Role`、`Menu`、`RouteConfig`
    - 使用联合类型约束角色码和权限码，避免权限字符串随意散落
  - `src/day29-rbac-demo/mock.ts`
    - 建立 `admin`、`manager`、`operator` 三类用户 mock 数据
    - 建立角色到权限码的 mock 映射
    - 建立带 `permissionCode` 的菜单 mock 数据
    - 建立带 `permissionCode`、`children`、`hidden` 的路由配置 mock 数据
  - `src/day29-rbac-demo/rbac.ts`
    - `getUserRoles()` 根据用户角色 id 找到角色列表
    - `getUserPermissions()` 根据角色合并权限列表
    - `filterMenuByPermissions()` 根据权限过滤菜单
    - `filterRoutesByPermissions()` 根据权限递归过滤路由配置
    - `generateMenuTree()` 根据过滤后的路由生成菜单数据
  - `src/day29-rbac-demo/tree.ts`
    - 实现 `flatListToTree()`，练习将后端扁平菜单列表转成树结构
  - `src/day29-rbac-demo/index.ts`
    - 遍历三类用户，在控制台打印当前用户、权限列表、可访问路由和可见菜单
  - `src/main.ts`
    - 临时导入 `@/day29-rbac-demo`，用于启动项目后在浏览器控制台查看 RBAC 计算结果
- Day 30：动态路由与菜单生成 demo
  - 在 Day 29 RBAC demo 基础上补齐路由配置过滤、菜单树生成和扁平列表转树练习
  - 明确 demo 数据流：`用户 -> 角色 -> 权限 -> 可访问路由 -> 可见菜单`
  - 练习 TypeScript 类型谓词、可选 `children` 字段、非空断言和递归过滤函数
  - 已沉淀 Day 30 学习笔记：`/Users/szy/Desktop/Plan/notes/day30-dynamic-route-menu-permission-notes.md`

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

## Day 17 验证重点

- 能说明 Vue 组件从创建、挂载、更新到卸载的生命周期过程
- 能说明接口请求通常放在 `onMounted`，定时器和事件监听清理通常放在 `onBeforeUnmount`
- 能写清父子通信的数据流：父组件通过 `props` 向下传递数据，子组件通过 `emit` 向上传递事件
- 能使用 `defineProps` 和 `defineEmits` 为表单组件、订单详情组件补明确类型
- 能说明子组件不应该直接修改父组件状态，而应该通过事件通知父组件处理
- 能使用 `provide / inject` 完成主题或权限这类跨层级上下文共享
- 能解释 `inject<Ref<T>>()` 的原因：祖先组件提供的是 `ref`，后代组件注入时类型要对应
- 能说出 `provide / inject` 不适合替代普通父子通信，也不适合承载复杂全局业务状态

## Day 18 验证重点

- 能说明默认插槽适合承载组件的主体内容
- 能说明具名插槽适合承载标题区、操作区、底部区域等明确位置
- 能说明作用域插槽适合子组件掌握数据或循环逻辑、父组件决定渲染内容的场景
- 能写出带 `title`、`extra` 具名插槽和默认插槽的通用卡片组件
- 能写出通过 `:item="item"` 暴露当前列表项的通用列表容器
- 能写出通过 `#actions="{ row }"` 自定义表格操作列的 demo
- 能说明后台项目为什么常用作用域插槽：表格结构稳定，但每个页面的操作按钮和业务动作不同
- 能说明插槽不是越多越好，过多插槽会导致组件职责变模糊、使用成本变高、父组件依赖子组件内部结构

## Day 19 验证重点

- 能说明 composable 是以 `useXxx` 命名的组合式函数，用于封装可复用状态逻辑
- 能区分 composable 和组件的边界：组件负责 UI 和业务编排，composable 负责状态、方法和副作用
- 能写出 `usePagination`，并返回 `currentPage`、`pageSize`、`total`、`totalPages` 和分页方法
- 能写出 `useModal`，并返回 `visible`、`mode`、`current` 和弹窗开关方法
- 能写出 `useLoading`，并通过 `start`、`stop`、`toggle` 管理加载状态
- 能在组件中解构 composable 返回值，并在模板中验证状态更新
- 能说明哪些逻辑适合抽成 composable，例如分页、弹窗、loading、请求状态、表单状态
- 能说明抽象的收益和成本，避免把只在单个组件中使用的临时代码过早抽象

## Day 20 验证重点

- 能说明自定义指令适合封装直接操作 DOM 的行为，例如聚焦、复制、权限展示
- 能说出 `mounted`、`updated`、`unmounted` 在指令中的职责
- 能写出 `v-focus`，并解释为什么自动聚焦要放在 `mounted`
- 能写出 `v-copy`，并使用 `navigator.clipboard.writeText` 完成复制
- 能说明为什么要保存 `_copyHandler`：`removeEventListener` 需要同一个函数引用
- 能说明 `handleClick` 访问外层变量是闭包，`el._copyHandler = handleClick` 是保存函数引用
- 能使用 `updated` 同步最新的 `_copyValue`，避免复制到旧的闭包值
- 能写出 `v-permission`，并根据权限列表控制按钮显示或隐藏
- 能说明前端按钮权限只能优化体验，不能替代后端接口鉴权
- 能通过 `directive-Demo.vue` 同时验证 `v-focus`、`v-copy`、`v-permission`

## Day 22 验证重点

- 能说明中后台项目为什么要按职责拆目录
- 能说明 `api`、`components`、`composables`、`directives`、`layouts`、`router`、`stores`、`types`、`utils`、`views` 的职责边界
- 能在 `vite.config.ts` 中配置 `@` 路径别名
- 能在 TypeScript 配置中让编辑器和类型检查识别 `@/*`
- 能使用 `.env.development` 管理开发环境变量
- 能通过 `import.meta.env` 读取 `VITE_` 开头的环境变量
- 能区分 `constants`、`types`、`utils` 分别解决什么问题
- 能通过本地 Vite 页面验证路径别名和环境变量读取

## Day 23 验证重点

- 能说明静态路由、嵌套路由、路由守卫、`meta`、403、404 各自负责什么
- 能配置 `BasicLayout + children` 的后台嵌套路由
- 能在 `App.vue` 和布局组件中正确放置 `RouterView`
- 能在 `main.ts` 中通过 `app.use(router)` 注册路由
- 能用 `meta.title` 设置页面标题
- 能用 `meta.requiresAuth` 控制页面是否需要登录
- 能用 `meta.permission` 控制页面访问权限
- 能通过 `beforeEach` 实现未登录访问后台页跳转登录页
- 能通过 `beforeEach` 实现无权限访问业务页跳转 `/403`
- 能通过 `/:pathMatch(.*)*` 实现 404 兜底
- 能说明 `403` 是无权限，`404` 是页面不存在

## Day 25 验证重点

- 能说明 `axios.create()` 为什么要创建项目专用请求实例
- 能说明请求拦截器在请求发出前执行，适合注入 token
- 能说明响应拦截器在响应回来后执行，适合统一处理业务错误和 HTTP 错误
- 能区分业务错误和 HTTP 错误：业务错误通常是 `status = 200` 但 `code !== 0`
- 能说明 `401` 通常代表登录过期，需要清 token 并跳登录
- 能说明 `500`、网络错误不应该散落在各页面重复处理
- 能使用 mock 成功、业务失败、401、500 四类响应验证请求封装
- 能通过 TypeScript 检查 `request-wrapper.ts`、`mock.ts`、`main.ts`

## Day 26 验证重点

- 能说明 ESLint 和 Prettier 的职责区别
- 能说明 ESLint 偏代码质量检查，Prettier 偏代码格式统一
- 能通过格式化前后代码对比说明 Prettier 的价值
- 能故意制造并修复基础 lint / 类型问题
- 能说明 husky 用来接入 Git hooks，常用于提交前检查
- 能说明 lint-staged 只处理暂存区文件，适合提高提交前检查速度
- 能说出 `type(scope): subject` 形式的 commit message 规范
- 能理解 `chore(lint): add pre commit quality checks` 的含义

## Day 27 验证重点

- 能说明权限系统中角色、权限点、菜单、路由、按钮之间的关系
- 能通过不同 mock 用户验证菜单过滤结果
- 能说明菜单隐藏不等于路由安全，路由守卫仍然需要判断 `meta.permission`
- 能通过 `v-permission` 控制用户管理页中的新增、编辑、删除按钮
- 能说明前端权限只能控制展示和交互体验，不能替代后端接口鉴权
- 能解释刷新页面后为什么要从持久化状态恢复用户和权限

## Day 30 验证重点

- 能说明为什么菜单过滤不能替代路由权限判断
- 能根据用户权限递归过滤 `RouteConfig[]`
- 能根据过滤后的路由生成可见菜单
- 能解释 `children?: RouteConfig[]` 和 `children: undefined` 的类型差异
- 能说明类型谓词 `.filter((route): route is RouteConfig => route !== null)` 的作用
- 能解释 `route.permissionCode!` 是 TypeScript 非空断言，不是运行时校验
- 能写出 `flatListToTree()`，把后端扁平菜单列表转换成树结构
- 能通过控制台输出验证 `admin`、`manager`、`operator` 的权限、路由和菜单不同

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

Day 25 Axios 请求封装 demo 可以单独做 TypeScript 检查：

```bash
pnpm exec tsc --ignoreConfig --noEmit --strict --moduleResolution Bundler --module ESNext --target ES2020 --lib ES2020,DOM --esModuleInterop --allowSyntheticDefaultImports day25-request-wrapper-demo/src/main.ts day25-request-wrapper-demo/src/mock.ts day25-request-wrapper-demo/src/request-wrapper.ts
```

Day 26 代码规范 demo 可以单独做 TypeScript 检查：

```bash
pnpm exec tsc --ignoreConfig --noEmit --strict --moduleResolution Bundler --module ESNext --target ES2020 ts-practice/day26-lint-prettier.ts
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

Day 19 composable demo 也通过同一个 Vite 入口查看。需要切换示例时，修改 `src/App.vue` 中导入的组件：

```ts
import ReactiveDemo from "../vue-demos/day19-composable/day19-composable-Demo.vue";
```

Day 20 自定义指令 demo 也通过同一个 Vite 入口查看。需要切换示例时，修改 `src/App.vue` 中导入的组件：

```ts
import ReactiveDemo from "../src/day20-directives/directive-Demo.vue";
```

三个全局指令在 `src/day20-directives/index.ts` 中统一注册，并在 `src/main.ts` 中调用：

```ts
setDirectives(app);
```

Day 23 Router demo 已接入项目入口，可以直接启动查看：

```bash
pnpm dev
```

启动后访问：

```text
http://127.0.0.1:5173/
```

验证路径：

```text
访问 /dashboard，未登录时跳 /login。
点击“管理员登录”后跳回 /dashboard。
访问 /user，管理员可以进入用户管理页。
点击“访客登录”后手动访问 /user，会跳 /403。
访问不存在路径，例如 /not-exist，显示 404。
```

Day 27 权限 demo 已接入项目入口，可以直接启动查看：

```bash
pnpm dev
```

启动后访问：

```text
http://127.0.0.1:5173/
```

验证路径：

```text
访问 /dashboard，未登录时跳 /login。
点击“管理员登录”，跳转 /dashboard，可看到首页、用户管理、系统设置。
点击“编辑员登录”，跳转 /dashboard，可看到首页、用户管理。
点击“访客登录”，跳转 /dashboard，只能看到首页。
编辑员进入 /user，只能看到新增、编辑按钮，看不到删除按钮。
访客手动访问 /user，会跳转 /403。
访问不存在路径，例如 /not-exist，显示 404。
```

Day 29 RBAC 权限模型 demo 已通过 `src/main.ts` 临时导入：

```ts
import "@/day29-rbac-demo";
```

启动项目后打开浏览器控制台，可以看到三类用户的权限计算结果：

```text
管理员：拥有首页、用户管理、系统设置
主管：拥有首页、用户管理
操作员：拥有首页、用户管理
```

这个 demo 的验证重点是：

```text
用户 -> 角色 -> 权限 -> 菜单
```

也就是根据用户角色计算权限列表，再根据权限列表过滤菜单。

Day 30 动态路由与菜单生成 demo 继续复用 `src/day29-rbac-demo`：

```bash
pnpm dev
```

启动项目后打开浏览器控制台，可以看到三类用户的完整权限计算结果：

```text
当前用户
权限列表
可访问路由
可见菜单
```

这个 demo 的验证重点是：

```text
用户 -> 角色 -> 权限 -> 可访问路由 -> 可见菜单
```

另外可以单独查看 `src/day29-rbac-demo/tree.ts`，理解后端扁平菜单列表如何转换成侧边栏需要的树结构。
