/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-05 15:00:29
 */
import "./mock";
import request from "./request-wrapper";

async function runDemo() {
  try {
    const data = await request.get("/user/success");
    console.log("成功响应：", data);
  } catch (error) {
    console.log("成功接口异常：", error);
  }

  try {
    await request.get("/user/business-error");
  } catch (error) {
    console.log("业务错误被捕获：", error);
  }

  try {
    await request.get("/user/unauthorized");
  } catch (error) {
    console.log("401 被捕获：", error);
  }

  try {
    await request.get("/user/server-error");
  } catch (error) {
    console.log("500 被捕获：", error);
  }
}

runDemo();
