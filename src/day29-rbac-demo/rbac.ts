import { User, Role, PermissionCode, Menu } from "./types";

export function getUserRoles(user: User, roles: Role[]) {
  return roles.filter((role) => user.roleIds.includes(role.id));
}

export function getUserPermissions(user: User, roles: Role[]) {
  const userRoles = getUserRoles(user, roles);
  const permissionSet = new Set<PermissionCode>();

  userRoles.forEach((role) => {
    role.permissionCodes.forEach((permission) => {
      permissionSet.add(permission);
    });
  });

  return Array.from(permissionSet);
}

export function filterMenuByPermissions(
  menus: Menu[],
  permissions: PermissionCode[],
) {
  return menus.filter((menu) => permissions.includes(menu.permissionCode));
}
