import { mockRoutes, mockRoles, mockUsers } from "./mock";
import {
  getUserPermissions,
  filterRoutesByPermissions,
  generateMenuTree,
} from "./rbac";

mockUsers.forEach((user) => {
  const permissions = getUserPermissions(user, mockRoles);
  const routes = filterRoutesByPermissions(mockRoutes, permissions);

  const menus = generateMenuTree(routes);

  console.log("当前用户：", user.nickname);
  console.log("权限列表：", permissions);
  console.log("可访问路由：", routes);
  console.log("可见菜单：", menus);
});
