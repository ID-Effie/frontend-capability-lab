/*
 * @Description: keyof：限制字段名。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-20 12:08:54
 */
type User = {
  id: number;
  name: string;
  age: number;
};
type UserKey = keyof User;
const userNameKey: UserKey = "name";

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  id: 1,
  name: "string",
  age: 10,
};

console.log(getValue(user, userNameKey));
// console.log(getValue(user, "sex"));

type TableColumn<T> = {
  title: string;
  key: keyof T;
};

const userColumns: TableColumn<User>[] = [
  { title: "用户ID", key: "id" },
  { title: "用户名", key: "name" },
  { title: "年龄", key: "age" },
  // {title:'创建时间',key:'createdAt'}
];

function printColumnKeys<T>(columns: TableColumn<T>[]) {
  columns.forEach((column) => {
    console.log(`${column.title}: ${String(column.key)}`);
  });
}

printColumnKeys(userColumns);

export {};
