/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-21 14:53:22
 */
// api/request.ts
import type { ApiError, ApiResponse } from "./day11-api-response";
import axios, { type AxiosRequestConfig } from "axios";

export interface RequestConfig extends AxiosRequestConfig {
  showError?: boolean;
}

export async function request<T>(
  config: RequestConfig,
): Promise<ApiResponse<T>> {
  const res = await axios.request<ApiResponse<T>>(config);

  if (res.data.code != 0) {
    const error: ApiError = {
      code: res.data.code,
      message: res.data.message,
    };
    throw error;
  }

  return res.data;
}

// api/auth.ts
// import { request } from './request'

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  userId: number;
  username: string;
}

export function login(params: LoginParams): Promise<ApiResponse<LoginResult>> {
  return request<LoginResult>({
    url: "/api/login",
    method: "POST",
    data: params,
  });
}

//api/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "disabled";
}

export interface UserListParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

export interface PageResult<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

export function getUserList(
  params: UserListParams,
): Promise<ApiResponse<PageResult<User>>> {
  return request<PageResult<User>>({
    url: "/api/users",
    method: "GET",
    params,
  });
}

// api/user.ts 删除用户接口
export interface DeleteUserParams {
  id: number;
}
export function deleteUser(
  params: DeleteUserParams,
): Promise<ApiResponse<null>> {
  return request<null>({
    url: `/api/users/${params.id}`,
    method: "DELETE",
  });
}

// api/user.ts 修改用户状态接口
export interface UpdateUserStatusParams {
  id: number;
  status: "active" | "disabled";
}
export interface UpdateUserStatusResult {
  id: number;
  status: "active" | "disabled";
}
export function updateUserStatus(
  params: UpdateUserStatusParams,
): Promise<ApiResponse<UpdateUserStatusResult>> {
  return request<UpdateUserStatusResult>({
    url: `/api/users/${params.id}/status`,
    method: "PATCH",
    data: {
      status: params.status,
    },
  });
}
