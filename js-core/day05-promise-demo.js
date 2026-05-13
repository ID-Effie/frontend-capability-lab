/*
 * @Description: 
  - Promise 成功链式调用
  - Promise 错误传播
  - `finally` 执行时机
  - `async/await + try/catch`
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-13 11:01:42
 */

  // Promise 成功链式调用
  Promise.resolve(1)
  .then(res=>{
    return res+1
  })
  .then(res=>{
    console.log(res);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(res*100)
      },1000)
    })
  })
  .then(res=>{
    console.log(res);
  })

  // finally 执行时机
  Promise.reject('Promise.reject')
  .then((res)=>{
    console.log('promise 失败执行的then');
    
  })
  .catch(err => {
    console.log('catch:', err);
  })
  .finally(()=>{
    console.log('promise-finally');
    
  })

  // Promise 错误传播
  Promise.resolve()
  .then(()=>{
    throw new Error ('第一步错误')
  })
  .then(()=>{
    console.log('出错后续的普通then不会执行，错误继续传递');
  })
  .catch(error=>{
    console.log('catch捕获错误：',error);
  })
  .then(()=>{
    console.log('catch没有继续抛出错误，catch后面的then继续执行');
    throw new Error ('第二处错误')
  })
  .catch(error=>{
    console.log('catch捕获错误,并继续抛出错误',error);
    throw new Error (' catch抛出错误')
  })
  .catch(error=>{
    console.log('catch捕获错误：',error);
  })
  .finally(()=>{
    console.log('Promise.resolve-finally会执行');
    
  })
  
  // `finally` 执行时机 、async/await + try/catch

  let loading = false
  const loginAPI = (params) => {
    return new Promise((resolve, reject) => {
      if (params.password === 1234 && params.userName === '李兰') {
      resolve(true) 
    } else{
      reject(new Error("管理员账号/密码错误！"))
    }
    })
  }

  async function getUser() {
    try {
      loading = true
      const result = await loginAPI({
        userName:'李兰',
        password:12345
      })
      if (result) {
        console.log('登录成功');
      }
    } catch (error) {
      console.log('登录失败',error);
    } finally {
      loading = false
      console.log(loading);
      
    }
  }

  getUser()

