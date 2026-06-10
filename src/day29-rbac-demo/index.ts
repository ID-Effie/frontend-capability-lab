import { mockMenus, mockRoles, mockUsers } from "./mock";
import { filterMenuByPermissions, getUserPermissions } from "./rbac";

mockUsers.forEach((user) => {
  const permissions = getUserPermissions(user, mockRoles);
  const menus = filterMenuByPermissions(mockMenus, permissions);

  console.log("当前用户：", user.nickname);
  console.log("权限列表：", permissions);
  console.log(
    "可见菜单：",
    menus.map((menu) => menu.title),
  );
});
