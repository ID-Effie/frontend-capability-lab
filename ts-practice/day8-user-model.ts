/*
 * @Description: ts定义对象
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-18 16:46:36
 */
// 用户角色
type UserRole = "admin" | "manager" | "staff";

// 用户状态
type UserStatus = "enabled" | "disabled";

// 用户对象
interface User {
  id: number;
  userName: string;
  nickname?: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
  createdAt: string;
}

// 菜单对象
interface MenuItem {
  id: number;
  title: string;
  path: string;
  icon?: string;
  parentId?: number;
  children?: MenuItem[]; // 递归嵌套
}

// 分页数据
// PageResult<T> 让分页结构复用。用户列表可以用它，菜单列表、订单列表、商品列表也可以用它
interface PageResult<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 用户分页列表
type UserPageResult = PageResult<User>;
