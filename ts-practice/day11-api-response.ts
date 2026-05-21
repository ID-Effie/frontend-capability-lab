/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-21 14:53:02
 */

// types/api.ts
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}
export interface ApiError {
  code: number;
  message: string;
}
