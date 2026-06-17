import { Menu, User, Role, RouteConfig } from "./types";

export const mockUsers: User[] = [
  {
    id: 1,
    username: "admin",
    nickname: "管理员",
    roleIds: ["admin"],
  },
  {
    id: 2,
    username: "manager",
    nickname: "主管",
    roleIds: ["manager"],
  },
  {
    id: 3,
    username: "operator",
    nickname: "操作员",
    roleIds: ["operator"],
  },
];

export const mockRoles: Role[] = [
  {
    id: "admin",
    name: "管理员",
    permissionCodes: [
      "dashboard:view",
      "user:list",
      "user:create",
      "user:update",
      "user:delete",
      "setting:view",
    ],
  },
  {
    id: "manager",
    name: "主管",
    permissionCodes: [
      "dashboard:view",
      "user:list",
      "user:create",
      "user:update",
    ],
  },
  {
    id: "operator",
    name: "操作员",
    permissionCodes: ["dashboard:view", "user:list"],
  },
];

export const mockMenus: Menu[] = [
  {
    title: "首页",
    path: "/dashboard",
    permissionCode: "dashboard:view",
  },
  {
    title: "用户管理",
    path: "/user",
    permissionCode: "user:list",
  },
  {
    title: "系统设置",
    path: "/setting",
    permissionCode: "setting:view",
  },
];

export const mockRoutes: RouteConfig[] = [
  {
    path: "/dashboard",
    title: "首页",
    permissionCode: "dashboard:view",
  },
  {
    path: "/user",
    title: "用户管理",
    permissionCode: "user:list",
    children: [
      {
        path: "/user/add",
        title: "新增用户",
        permissionCode: "user:create",
      },
      {
        path: "/user/edit",
        title: "编辑用户",
        permissionCode: "user:update",
      },
      {
        path: "/user/delete",
        title: "删除用户",
        permissionCode: "user:delete",
        hidden: true,
      },
    ],
  },
  {
    path: "/setting",
    title: "系统设置",
    permissionCode: "setting:view",
  },
];
