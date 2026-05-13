/*
 * @Description:
  - 模拟请求成功
  - 模拟请求失败
  - 模拟 loading 状态
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-13 14:30:00
 */

let loading = false;

const setLoading = (value) => {
  loading = value;
  console.log('loading:', loading);
};

const requestMock = (options) => {
  return new Promise((resolve, reject) => {
    console.log('开始请求:', options.url);

    setTimeout(() => {
      if (options.success) {
        resolve({
          code: 200,
          message: '请求成功',
          data: options.data,
        });
      } else {
        reject({
          code: 500,
          message: '请求失败',
          data: null,
        });
      }
    }, 1000);
  });
};

async function getUserInfo() {
  try {
    setLoading(true);

    const res = await requestMock({
      url: '/api/user',
      success: true,
      data: {
        id: 1,
        name: '李兰',
      },
    });

    console.log('成功响应:', res);
  } catch (error) {
    console.log('失败响应:', error);
  } finally {
    setLoading(false);
    console.log('用户信息请求结束');
  }
}

async function getOrderList() {
  try {
    setLoading(true);

    const res = await requestMock({
      url: '/api/order',
      success: false,
      data: null,
    });

    console.log('成功响应:', res);
  } catch (error) {
    console.log('失败响应:', error);
  } finally {
    setLoading(false);
    console.log('订单列表请求结束');
  }
}

async function runDemo() {
  console.log('====== 模拟请求成功 ======');
  await getUserInfo();

  console.log('====== 模拟请求失败 ======');
  await getOrderList();
}

runDemo();
