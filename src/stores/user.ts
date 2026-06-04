/*
 * @Description: 加用户信息 store
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-04 16:23:33
 */
import { defineStore } from "pinia";

interface UserInfo {
  id: number;
  username: string;
  nickname: string;
  roles: string[];
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null as UserInfo | null,
  }),

  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },

    clearUserInfo() {
      this.userInfo = null;
    },
  },
});
