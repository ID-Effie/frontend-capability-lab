/*
 * @Description: Pinia state / getters / actions 类型
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-23 12:07:25
 */
import { defineStore } from "pinia";
interface UserInfo {
  id: number;
  name: string;
  roles: string[];
}

interface AuthState {
  token: string;
  userInfo: UserInfo | null;
  permissions: string[];
}
export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: "",
    userInfo: null,
    permissions: [],
  }),

  getters: {
    isLogin: (state): boolean => Boolean(state.token),
    roleCount: (state): number => state.userInfo?.roles.length ?? 0,
  },

  actions: {
    setToken(token: string): void {
      this.token = token;
    },

    setUserInfo(userInfo: UserInfo): void {
      this.userInfo = userInfo;
    },

    logout(): void {
      this.token = "";
      this.userInfo = null;
      this.permissions = [];
    },
  },
});

// 加上 Partial<T> 的局部更新练习
type updateUserInfo = Partial<Pick<UserInfo, "name" | "roles">>;
