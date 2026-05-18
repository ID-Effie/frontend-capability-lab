/*
 * @Description: type 和 interface 的常见取舍
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-18
 */

// 1. type 更适合描述固定取值、联合类型、基础类型别名
type UserRole = "admin" | "manager" | "staff";
type UserStatus = "enabled" | "disabled";
type ID = string | number;

const currentRole: UserRole = "admin";
const currentStatus: UserStatus = "enabled";
const userId: ID = 1001;

// 2. interface 更适合描述对象结构、接口返回数据、业务模型
interface User {
  id: ID;
  userName: string;
  nickname?: string;
  role: UserRole;
  status: UserStatus;
}

const user: User = {
  id: userId,
  userName: "admin",
  role: currentRole,
  status: currentStatus,
};

// 3. interface 可以继承，适合抽取业务对象的公共字段
interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt?: string;
}

interface MenuItem extends BaseEntity {
  title: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
}

const systemMenu: MenuItem = {
  id: 1,
  title: "系统管理",
  path: "/system",
  createdAt: "2026-05-18",
  children: [
    {
      id: 2,
      title: "用户管理",
      path: "/system/users",
      createdAt: "2026-05-18",
    },
  ],
};

// 4. type 可以用交叉类型组合对象类型
type PageParams = {
  page: number;
  pageSize: number;
};

type UserQuery = PageParams & {
  keyword?: string;
  role?: UserRole;
  status?: UserStatus;
};

const userQuery: UserQuery = {
  page: 1,
  pageSize: 10,
  keyword: "admin",
  role: "admin",
};

// 5. 泛型接口可以描述可复用的分页返回结构
interface PageResult<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

const userPage: PageResult<User> = {
  list: [user],
  total: 1,
  page: 1,
  pageSize: 10,
};

// 6. 简单规范：
// - 固定取值、联合类型、类型组合：优先用 type
// - 业务对象、接口返回结构、组件 props：优先用 interface
console.log(systemMenu, userQuery, userPage);

export {};
