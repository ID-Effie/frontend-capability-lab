/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-05 15:00:06
 */

import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// 请求实例.拦截器.请求拦截器.使用/注册一个拦截函数
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code !== 0) {
      console.error("业务错误：", res.message);
      return Promise.reject(res);
    }

    return res.data;
  },
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.error("登录过期，请重新登录");
      localStorage.removeItem("token");
    } else if (status === 500) {
      console.error("服务器错误");
    } else {
      console.error("网络错误或请求失败");
    }

    return Promise.reject(error);
  },
);

export default request;
