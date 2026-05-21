/*
 * @Description: Axios 响应类型与请求层建模
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-21 11:15:49
 */

/** 1.为什么要给接口建模
 * 我提前告诉 TypeScript：
 * 接口返回什么结构；
 * 接口 data 里面是什么；
 * 接口错误长什么样；
 * 请求参数长什么样。
 */

// 2.Axios 本身返回的不是后端数据，而是一个完整的 Axios 响应对象。
import type { AxiosResponse } from "axios";
// 它大概长这样：
interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
// 例如
const res: AxiosResponse = await axios.get("/api/user");
// 真正的数据在res.data
// AxiosResponse<T> 里的 T 是 res.data 的类型

// Axios 实际响应是：
// {
//   data: {
//     code: 0,
//     message: 'success',
//     data: {
//       id: 1,
//       name: 'Tom'
//     }
//   },
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {}
// }

/** 3.接口响应类型 ApiResponse<T>
 * ApiResponse<T> = 后端统一外壳 + 每个接口自己的 data 类型
 * 大多数后端接口会统一返回一种结构，比如：
 * {
    code: 0,
    message: 'success',
    data: 数据
  }
 * 可以定义一个通用响应类型：
 */
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T; // 这里的 T 是泛型，表示不同接口的具体数据。
}

//例如登录接口：
interface LoginResult {
  token: string;
  userId: number;
  username: string;
}
type LoginResponse = ApiResponse<LoginResult>;
// 等价于：
/*
interface LoginResponse {
  code: number;
  message: string;
  data: {
    token: string;
    userId: number;
    username: string;
  };
}*/

// 四、Promise<ApiResponse<T>> 是什么意思
// 接口请求是异步的，所以函数通常返回 Promise。
/**: Promise<ApiResponse<User[]>>：
 * getUserList 是一个异步函数；
 * 它最终会返回一个 ApiResponse；
 * 这个 ApiResponse 里面的 data 是 User[]。
 */
function getUserList(): Promise<ApiResponse<User[]>> {
  return request("/api/users");
}

// 五、泛型请求函数
// 如果每个接口都写完整的类型，会很重复。所以可以封装一个泛型请求函数：
import axios from "axios";
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}
export function request<T>(url: string): Promise<ApiResponse<T>> {
  return (
    axios
      // axios.get<ApiResponse<T>>() 的泛型，描述的是 res.data 的类型；
      // res 本身的类型是 AxiosResponse<ApiResponse<T>>。
      .get<ApiResponse<T>>(url)
      .then((res: AxiosResponse<ApiResponse<T>>) => res.data)
  );
}
// 调用时指定T
interface User {
  id: number;
  name: string;
}
const res1 = await request<User[]>("/api/users");
//res.data 就是User[]

/**
六、请求参数类型和响应类型要分开
一个接口通常有两种类型：
请求参数类型
响应结果类型
为什么要分开？
因为请求参数和响应结果不是同一个东西。它们字段不同，语义不同，生命周期也不同。

正确思路：
Params / Payload / Query = 请求参数
Result / Response / DTO = 响应结果
ApiResponse<T> = 后端统一响应外壳
 */

/**七、错误响应类型 ApiError
 * 接口不一定成功，也可能失败
 * 后端可能返回：
{
  code: 401,
  message: '登录已过期',
  data: null
}
 */
// 可以定义错误类型：
export interface ApiError {
  code: number;
  message: string;
  details?: unknown;
}
// 八、RequestConfig 请求配置类型
// 你也可以基于 Axios 的配置做一层自己的请求配置。
import type { AxiosRequestConfig } from "axios";

export interface RequestConfig extends AxiosRequestConfig {
  // 这类字段不是 Axios 原生字段，而是你项目请求层自己的控制字段。
  showLoading?: boolean; // 是否展示 loading
  showError?: boolean; // 是否自动弹错误提示
  auth?: boolean; // auth: 是否需要 token
}
// 或者更贴近后端响应：
// export interface ApiErrorResponse {
//   code: number;
//   message: string;
//   data: null;
// }
// 请求层里可以统一处理：
export async function request1<T>(
  config: AxiosRequestConfig,
): Promise<ApiResponse<T>> {
  try {
    const res = await axios.request<ApiResponse<T>>(config);
    if (res.data.code != 0) {
      throw {
        code: res.data.code,
        message: res.data.message,
      } satisfies ApiError;
    }
    return res.data;
  } catch (error) {
    throw error;
  }
}
