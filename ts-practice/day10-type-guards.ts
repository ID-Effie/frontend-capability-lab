/*
 * @Description: 类型守卫
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-20 11:46:26
 */

type User1 = {
  id: number;
  name: string;
  age: number;
};
function isUser1(value: unknown): value is User1 {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number" &&
    "name" in value &&
    typeof value.name === "string" &&
    "age" in value &&
    typeof value.age === "number"
  );
}

function handleIsUser(data: unknown) {
  if (isUser1(data)) {
    console.log(data.name);
  } else {
    console.log("不是user对象！");
  }
}
const user2 = {
  id: 1,
  name: "string",
  age: 10,
};
handleIsUser(user2);
handleIsUser({});

// typeof 类型收窄
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("order"));
console.log(formatValue(12.345));

// in 区分联合对象：
type NormalUser = {
  id: number;
  name: string;
};
type AdminUser = {
  id: number;
  name: string;
  permissions: string[];
};
function printUserInfo(user: NormalUser | AdminUser) {
  if ("permissions" in user) {
    console.log(user.permissions.join(","));
  } else {
    console.log(user.name);
  }
}

printUserInfo({ id: 1, name: "普通用户" });
printUserInfo({ id: 2, name: "管理员", permissions: ["user:create"] });

export {};
