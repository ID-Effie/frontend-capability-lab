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
  permissions: string[];
}

function getStoredUserInfo() {
  const userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    return null;
  }

  try {
    return JSON.parse(userInfo) as UserInfo;
  } catch {
    localStorage.removeItem("userInfo");
    return null;
  }
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: getStoredUserInfo(),
  }),

  getters: {
    roles: (state) => state.userInfo?.roles || [],
    permissions: (state) => state.userInfo?.permissions || [],
  },

  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },

    clearUserInfo() {
      this.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});
