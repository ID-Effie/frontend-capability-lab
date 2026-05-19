/*
 * @Description:
- 函数参数和返回值类型
- 函数重载认知
- 泛型基础
- 泛型约束
- 默认泛型参数
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-19 10:14:26
 */

/**
 * TypeScript 中，函数最基础的类型约束就是：参数是什么类型，返回值是什么类型。
 * @param a: number
 * @param b: number
 * @returns: number
 */
function add(a: number, b: number): number {
  return a + b;
}
// 函数没有返回值,用void
function logMessage(message: string): void {
  console.log(message);
}
// 参数可选用 ?
function greet(name?: string): string {
  return name ? `Hello,${name}` : "Hello";
}
// 参数有默认值，TS通常会自动推断
function createPage(page = 1, pageSize = 10) {
  return { page, pageSize };
}
const createPageOne = createPage();
// 常用场景
type User = {
  id: number;
  name: string;
};
function getUserName(user: User): string {
  return user.name;
}

/**
 * 函数类型表达式：函数本身也可以作为一种类型,也可用于参数
 */
type Formatter = (value: string) => string;
const upper: Formatter = (value) => value.toUpperCase();
// 也可用于参数
function handleText(text: string, formatter: (value: string) => string) {
  return formatter(text);
}
const textUpper = handleText("hello", (value) => value.toUpperCase());
console.log(textUpper);
// 常见写法:选择某个 item 后触发的函数
type OnSelect<T> = (item: T) => void;

/**
 * 函数重载认知
 * 用于描述：同一个函数，根据不同的参数类型，返回不同结果类型
 * 适合情况：
 * 输入类型不同、返回类型也有明确差异、希望调用者获得更精确的提示。
 * 但不要滥用，很多时候联合类型就够了
 */
// 前两行是‘重载签名’，最后一行是‘真实实现’
function getValue(value: string): string;
function getValue(value: number): number;
function getValue(value: string | number): string | number {
  return value;
}
// TS会根据传入参数推断结果
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: Date): string;
function formatValue(value: string | number | Date): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return String(value);
}
const format1 = formatValue("hello");
const format2 = formatValue(123);
const format3 = formatValue(new Date());
console.log("TS会根据传入参数推断结果-hello", format1);
console.log("TS会根据传入参数推断结果-123", format2);
console.log("TS会根据传入参数推断结果-Date", format3);

/**
 * 泛型可以理解为：把类型当作参数传给函数、类型或接口
 * 最核心的意义：复用逻辑，同时保留类型信息
 * 函数逻辑是通用的，但类型不会丢。
 * 泛型用于数组
 * 很多工具函数都离不开泛型
 */
// 这里的T是一个类型变量
function identity<T>(value: T): T {
  return value;
}
const a = identity<string>("hello");
const b = identity<number>(123);

// 返回值为什么有undefined？因为数组可能为空，所以更安全的类型应该包含undefined
function first<T>(list: T[]): T | undefined {
  return list[0];
}
const n = first([1, 2, 3]);
const s = first(["1", "2"]);

// 泛型默认可以是任意类型
// function getLength<T>(value:T):number {
//   // 报错：类型“T”上不存在属性“length”
//   return value.length;
// }
/**
 * 泛型默认可以是任意类型
 * T 可以是任意类型,但它必须拥有 length: number
 * @param value:T 可以是任意类型,但它必须拥有 length: number
 * @returns
 */
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
getLength("hello");
getLength([1, 2, 3]);
getLength({ length: 10 });
// getLength(123);  // 类型“number”的参数不能赋给类型“{ length: number; }”的参数。

/**
 * 泛型约束常见于工具函数
 * @param item 传入的数据必须有 id
 * @returns 传出的数据必须有 id
 */
function getId<T extends { id: number | string }>(item: T): T["id"] {
  return item.id;
}
/**
 * T 是对象类型
 * K 必须是 T 的 key
 * 返回值是 T[K]
 * @param obj
 * @param key
 * @returns
 */
function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = {
  id: 1,
  name: "Alice",
  age: 20,
};
const name1 = getField(user, "name");
const age = getField(user, "age");
// 类型“"email"”的参数不能赋给类型“"name" | "id" | "age"”的参数
// getField(user, "email"); // 因为 email 不在 user 上
