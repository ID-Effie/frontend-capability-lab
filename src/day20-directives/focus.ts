/*
 * @Description:
  作用：输入框打开页面后自动聚焦。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-30 16:42:15
 */
import type { Directive } from "vue";

export const vFocus: Directive<HTMLElement> = {
  mounted(el) {
    el.focus();
  },
};
