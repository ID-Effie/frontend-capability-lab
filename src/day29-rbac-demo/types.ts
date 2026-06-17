export type RoleCode = "admin" | "manager" | "operator";

export type PermissionCode =
  | "dashboard:view"
  | "user:list"
  | "user:create"
  | "user:update"
  | "user:delete"
  | "setting:view";

export interface User {
  id: number;
  username: string;
  nickname: string;
  roleIds: RoleCode[];
}

export interface Role {
  id: RoleCode;
  name: string;
  permissionCodes: PermissionCode[];
}

export interface Menu {
  title: string;
  path: string;
  permissionCode: PermissionCode;
}

export interface RouteConfig {
  path: string;
  title: string;
  permissionCode?: PermissionCode;
  hidden?: boolean;
  children?: RouteConfig[];
}
