/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-05 15:00:19
 */
import MockAdapter from "axios-mock-adapter";
import request from "./request-wrapper";

const mock = new MockAdapter(request, { delayResponse: 500 });

mock.onGet("/user/success").reply(200, {
  code: 0,
  message: "success",
  data: {
    id: 1,
    name: "李兰",
  },
});

mock.onGet("/user/business-error").reply(200, {
  code: 10001,
  message: "用户名不存在",
  data: null,
});

mock.onGet("/user/unauthorized").reply(401, {
  message: "Unauthorized",
});

mock.onGet("/user/server-error").reply(500, {
  message: "Internal Server Error",
});
