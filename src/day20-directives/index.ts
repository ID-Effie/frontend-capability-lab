/*
 * @Description:
  统一注册指令
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-30 16:43:21
 */
import type { App } from "vue";
import { vFocus } from "./focus";
import { vPermission } from "./permission";
import { vCopy } from "./copy";

export function setDirectives(app: App) {
  app.directive("focus", vFocus);
  app.directive("permission", vPermission);
  app.directive("copy", vCopy);
}
