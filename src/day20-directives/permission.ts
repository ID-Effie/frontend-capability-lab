/*
 * @Description:
  作用：根据当前用户权限控制按钮显示。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-30 16:42:28
 */

import type { Directive } from "vue";
import { useUserStore } from "@/stores/user";

// const currentPermissions = [
//   "user:add",
//   "user:edit",
//   // "user:delete",
//   "role:view",
// ];

export const vPermission: Directive<HTMLElement, string> = {
  mounted(el, binding) {
    const permission = binding.value;
    const userStore = useUserStore();

    if (!userStore.permissions.includes(permission)) {
      el.parentElement?.removeChild(el);
    }
  },
};
