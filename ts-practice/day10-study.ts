/*
 * @Description: 类型收窄、类型守卫、keyof 和联合状态建模。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-20 09:52:30
 */

// 类型收窄就是：一个变量原本可能有多种类型，但通过判断条件，TypeScript 能在某个代码块里推断出更具体的类型
function printValue(value: number | string) {
  // 进入 if 后，TS 知道它是 string
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    // 进入 else 后，TS 知道它是 number
    console.log(value.toFixed(2));
  }
}

// typeof 用来判断JS基础类型，常用于收窄
function formatId(id: string | number) {
  if (typeof id === "number") {
    return `ID-${id.toFixed(0)}`;
  }
  return `ID-${id.toUpperCase()}`;
}
// typeof null 的结果是 "object"，所以判断对象时要额外排除 null。
function isObject(value: unknown) {
  return typeof value === "object" && value !== null;
}

// in 用来判断某个属性是否存在于对象中，适合区分不同对象类型。
type User = {
  id: number;
  name: string;
  status: "active" | "disabled";
};
type Admin = {
  id: number;
  name: string;
  permissions: string[];
};
function printAccount(account: User | Admin) {
  // 进入 if ('permissions' in account) 后，TS 知道 account 是 Admin
  if ("permissions" in account) {
    console.log(account.permissions.join(","));
  } else {
    console.log(account.name);
  }
}

// keyof 可以拿到一个对象类型的所有 key，组成联合类型
type UserKey = keyof User; // 等价于 type UserKey = 'id' | 'name' | 'status'
// 它最常用在：限制字段名必须来自某个对象类型。
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const user = {
  id: 1,
  name: "Alice",
  status: "active",
};
const username = getValue(user, "name");
// 类型“"age"”的参数不能赋给类型“"name" | "id" | "status"”的参数。
// getValue(user, "age"); 报错，因为age 不再user里

//  keyof 在表格列配置里的用途：让字段配置和数据结构保持同步
type TableColumn<T> = {
  title: string;
  key: keyof T;
};
const column: TableColumn<User>[] = [
  { title: "用户ID", key: "id" },
  { title: "用户名", key: "name" },
  { title: "状态", key: "status" },
  // { title: "手机号", key: "phone" }, // TS 会直接报错，因为 phone 不是 User 的字段。
];

// 类型断言：就是告诉 TS：“我比你更清楚这个值是什么类型。”
// 类型断言要谨慎，因为它不是运行时检查，只是告诉 TS 不要报错。
// 所以能靠类型收窄解决，就不要靠类型断言硬压。
const input = document.querySelector("#username") as HTMLInputElement;
input.value = "admin";
// 常见写法： value as SomeType
// 这虽然能骗过 TS，但运行时它仍然是字符串。
const value = "123" as unknown as number;

/**类型守卫函数：自己写一个判断函数，返回值使用 value is Type
 * 适合用在：
 * 接口返回值不确定
 * 本地存储读取数据
 * 复杂联合类型判断
 * 表单、路由参数、第三方数据校验
 */

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value != null &&
    "id" in value &&
    "name" in value
  );
}
function handleData(data: unknown) {
  if (isUser(data)) {
    // 进入 if (isUser(data)) 后，TS 知道 data 是 User。
    console.log(data.name);
  }
}

// 可辨识联合类型：多个类型都有一个共同字段，用这个字段区分它们。
type SuccessResult = {
  type: "success";
  data: string;
};
type ErrorResult = {
  type: "error";
  message: string;
};
type Result = SuccessResult | ErrorResult;
function handleResult(result: Result) {
  // 这里的 type 就是“辨识字段”
  if (result.type === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}
//后台状态也很适合这样建模，这样可以避免项目里到处写散乱字符串。
type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";
// Record<OrderStatus, string> 最终结果是一个对象，对象的key 是OrderStatus，key对应的值是字符串
const orderStatusText: Record<OrderStatus, string> = {
  pending: "待支付",
  paid: "已支付",
  shipped: "已发货",
  cancelled: "已取消",
};

// 要掌握的核心代码模型;
type UserStatus = "active" | "disabled" | "pending";
const userStatusText: Record<UserStatus, string> = {
  active: "启用",
  disabled: "禁用",
  pending: "待审核",
};
const userStatusColor: Record<UserStatus, string> = {
  active: "green",
  disabled: "red",
  pending: "orange",
};
function getUserStatusText(status: UserStatus) {
  return userStatusText[status];
}

export {};
