/*
 * @Description: 建登录状态 store
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-04 15:59:15
 */
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // 刷新页面后恢复。
    token: localStorage.getItem("token") || "",
  }),

  actions: {
    setToken(token: string) {
      // 更新 Pinia 内存状态
      this.token = token;
      // 是持久化。
      localStorage.setItem("token", token);
    },

    logout() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
