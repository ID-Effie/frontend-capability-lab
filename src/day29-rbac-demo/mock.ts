import { Menu, User, Role } from "./types";

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
      "user:add",
      "user:edit",
      "user:delete",
      "setting:view",
    ],
  },
  {
    id: "manager",
    name: "主管",
    permissionCodes: ["dashboard:view", "user:list", "user:add", "user:edit"],
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
