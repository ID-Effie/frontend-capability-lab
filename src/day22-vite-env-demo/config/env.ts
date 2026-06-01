/// <reference types="vite/client" />

/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-01 16:56:23
 */
export const env = {
  title: import.meta.env.VITE_APP_TITLE,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
};
