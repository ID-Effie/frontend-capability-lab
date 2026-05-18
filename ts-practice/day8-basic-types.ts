/*
 * @Description:ts 基础类型
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-18 14:44:52
 */

// ts 常见的基础类型
let username: string = "admin";
let age: number = 18;
let isLogin: boolean = true;

/**
 * 含义：一个用户对象必须有id、userName、enabled，并且他们的类型必须分别是数字、字符串、布尔值
 * interface 主要用来描述对象结构
 * interface 很适合定义接口返回的数据结构
 */
interface User {
  id: number;
  userName: string;
  enabled: boolean;
  // 可选属性用 ? 表示 avatar 这个字段可以有，也可以没有。
  // 但要注意，访问可选属性时要考虑它可能是 undefined：这个字段不稳定，使用前要判断。
  // console.log(user.avatar?.length)
  avatar?: string;
}
// interface 也适合定义菜单：
interface MenuItem {
  id: number;
  title: string;
  path: string;
  icon?: string;
  children?: MenuItem; //它表示菜单可以递归嵌套
}
// interface 可以继承
// interface BaseEntity{
//   id: number
//   createdAt: string
//   updateAt: string
// }
// interface User extends BaseEntity{
//   username: string
//   role: 'admin' | 'user'
// }
// 数组类型 array：数组表示一组相同类型的数据
const roles: string[] = ["admin", "editor"];
const roles1: Array<string> = ["admin", "editor"];
const ids: number[] = [1, 2, 3];

// 这是一个数组，数组里的每一项都必须符合 User 结构
const user: User[] = [
  { id: 1, userName: "admin", enabled: true },
  { id: 2, userName: "editor", enabled: false },
];

// 元组：也是数组，但它强调：长度固定，位置固定，每个位置的类型也固定
// 表示这个数组必须有两个元素，第一个是number，第二个也是number
const point: [number, number] = [10, 20];
// 表示这个数组第一个元素是number，第二个是字符串
const userEntry: [number, string] = [1, "admin"];

// 普通数组更适合列表，元组更适合结构固定的数据，不过在业务项目里不要滥用，很多时候对象跟清楚：
const responseStatus = {
  code: 200,
  message: "success",
};
// 把这个数组固定成一个只读的、值也固定的元组类型。适合表示固定配置、固定选项、固定状态
const requestStatus = [200, "success"] as const;

// type 用来给类型起名字，也叫类型别名。
type UserName = string | number;
const user1: UserName = "lilan";
// type 用来描述联合类型：它表示 who 只能是这三个字符串之一。
type Choose = "you" | "me" | "he";
const who: Choose = "you";
// const who1: choose = "boss";
//type 也可以交叉类型 & 表示合并类型
type person = UserName &
  Choose & {
    status: "like" | "hate";
  };
/**
 * type 和 interface 怎么选
 * 描述对象结构，优先用 interface
 * 描述联合类型、字面量类型、复杂组合，优先用 type
 * 但实际项目里可以这样定规范：
 * 接口返回对象、业务模型、组件 props：用 interface
 * 状态值、角色值、模式值、联合类型：用 type
 */
type UserRole = "admin" | "editor" | "manager" | "staff";
interface User2 {
  id: number;
  name: string;
  role: UserRole;
}

// 字面量类型就是：这个类型只能是某几个具体的值。它比普通 string 更安全.
// 这就是 TypeScript 对业务代码最大的价值之一：把很多运行时错误提前到写代码时发现
type Theme = "light" | "dark";

// 联合类型表示：一个值可以是几种类型之一。联合类型适合限制范围，让代码更稳定。
type Id = string | number;

// any 表示任意类型。用了 any，TypeScript 基本就不检查了。
// any 的问题是：它让 TypeScript 失去作用。项目里有时会临时用 any，但不能到处用。
let value: any = 123;
// value.toUpperCase(); // 数字没有 toUpperCase 方法，但 TS 不会提醒你。

// unknown 也表示未知类型，但它比 any 安全。
let value1: unknown = "hello";
// value.toUpperCase(); // 报错
// 这就是 unknown 的价值：它承认“我现在不知道这个值是什么”，但要求你在使用前先缩小范围。
if (typeof value === "string") {
  value.toUpperCase();
}

/**
 * any：我不知道它是什么，但我假装我什么都知道。
 * unknown：我不知道它是什么，所以我先检查再使用。
 * 哪里用unknown?
 * 接口返回不确定时，用 unknown 接住，再解析。
 * 第三方库返回值不确定时，用 unknown。
 * catch 错误对象，用 unknown。
 * 临时迁移老项目时，可以短期用 any，但要逐步替换。
 */

// as const 常用于固定配置,下面的类型是 readonly ['admin', 'user', 'guest']
// 这是告诉 TS：请把它当成更精确的常量类型。
const roles2 = ["admin", "user", "guest"] as const;
// 可以从数组里自动提取联合类型：
// 得到 type Role = 'admin' | 'user' | 'guest'
// 这样数据和类型来自同一个地方，不容易写重复。
type Role = (typeof roles2)[number];

//对象里的字面量推断会变宽
const user3 = {
  role: "admin",
};
/**TS 一般会推断成
 * {role: string;}
 * 因为对象属性默认是可以修改的：
 * user.role = 'user'
 * 若想固定他，就后面加 as const 或者 显示声明
 */
type Role1 = "admin" | "user" | "guest";
const user4: { role: Role } = {
  role: "admin",
};
// 如果这些文件没有 import 或 export，TypeScript 会把它们当成全局脚本，多个文件里的顶层变量会互相冲突。
export {};
