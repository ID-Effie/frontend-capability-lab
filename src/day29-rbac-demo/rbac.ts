import { User, Role, PermissionCode, Menu, RouteConfig } from "./types";

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

export function filterRoutesByPermissions(
  routes: RouteConfig[],
  permissions: PermissionCode[],
): RouteConfig[] {
  return routes
    .map((route): RouteConfig | null => {
      const children = route.children
        ? filterRoutesByPermissions(route.children, permissions)
        : undefined;

      const hasPermission =
        !route.permissionCode || permissions.includes(route.permissionCode);

      if (!hasPermission && !children?.length) {
        return null;
      }

      return {
        ...route,
        ...(children?.length ? { children } : {}),
      };
    })
    .filter((route): route is RouteConfig => route !== null);
}

export function generateMenuTree(routes: RouteConfig[]): Menu[] {
  return routes
    .filter((route) => !route.hidden)
    .map((route) => ({
      title: route.title,
      path: route.path,
      permissionCode: route.permissionCode!,
    }));
}
