/*
 * @Description:写 5 个工具函数：
      pickFields<T>
      formatOptions<T> ：把任意列表转成下拉选项
      groupBy<T> ： 把任意列表按规则分组
      safeGet<T> ： 安全读取对象字段，并保留字段类型
      createPageResult<T>
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-19 11:49:33
 */

function pickFields<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;

  keys.forEach((key) => {
    result[key] = obj[key];
  });

  return result;
}

type PageResult<T = unknown> = {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
};
function createPageResult<T>(
  list: T[],
  total: number,
  page: number,
  pageSize: number,
): PageResult<T> {
  return {
    list,
    total,
    page,
    pageSize,
  };
}

type Option<V extends string | number = string> = {
  label: string;
  value: V;
};
function formatOptions<T, V extends string | number>(
  list: T[],
  getLabel: (item: T) => string,
  getValue: (item: T) => V,
): Option<V>[] {
  return list.map((item) => ({
    label: getLabel(item),
    value: getValue(item),
  }));
}

type User = {
  id: number;
  name: string;
  role: string;
};
const users: User[] = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
];
const userOptions = formatOptions(
  users,
  (user) => user.name,
  (user) => user.id,
);
const roleOptions = formatOptions(
  users,
  (user) => user.role,
  (user) => user.role,
);
console.log("userOptions", userOptions);
console.log("roleOptions", roleOptions);

function groupBy<T, K extends string | number>(
  list: T[],
  getKey: (item: T) => K,
): Record<K, T[]> {
  return list.reduce(
    (result, item) => {
      const key = getKey(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
      return result;
    },
    {} as Record<K, T[]>,
  );
}
const groupedByRole = groupBy(users, (user) => user.role);
const groupedById = groupBy(users, (user) => user.id);
console.log("groupedByRole", groupedByRole);
console.log("groupedById", groupedById);

function safeGet<T, K extends keyof T>(
  obj: T | null | undefined,
  key: K,
): T[K] | undefined {
  if (!obj) {
    return undefined;
  }
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Alice",
  role: "admin",
};
const username = safeGet(user, "name");
const userid = safeGet(user, "id");
console.log("safeGet-username", username);
console.log("safeGet-userid", userid);

const pickedUserName = pickFields(user, ["name"]);
const pickedUserBase = pickFields(user, ["id", "name"]);
console.log("pickedUserName", pickedUserName);
console.log("pickedUserBase", pickedUserBase);

const userPageResult = createPageResult(users, 2, 1, 10);
const emptyUserPageResult = createPageResult<User>([], 0, 1, 10);
console.log("userPageResult", userPageResult);
console.log("emptyUserPageResult", emptyUserPageResult);
