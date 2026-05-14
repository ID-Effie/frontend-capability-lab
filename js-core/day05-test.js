/*
 * @Description: 
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-13 09:24:42
 */

const p = new Promise((resolve, reject) => {
  resolve('成功')
  rejected('失败') // pending状态改变，就不会再继续变
})
p.then(res=>{
  console.log(res);
  
})

// =====Promise的链式调用======
Promise.resolve(1)
// promise的链式调用： then 会返回一个新的Promise，所以可以连续调用
.then(res=>{
  return res+1
})
.then(res=>{
  return res+1
})
.then(res=>{
  console.log('then连续调用，then里面返回普通值，下个then会直接拿到这个值',res);
})

Promise.resolve()
.then(()=>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('异步结果')
    }, 1000);
  })
})
.then(res=>{
  console.log('then里面返回的是Promise，下一个then会等待Promise完成',res);
})

// ======错误传播=====
Promise.resolve()
.then(()=>{
  throw new Error("第一步出错");
})
.then(()=>{
  console.log('后面的普通then会被跳过，不会执行，错误会继续向后传递');
})
.catch(err=>{
  console.log("直到被catch捕获",err.message);
  return '恢复成功'
})
.then(res=>{
  console.log('catch 捕获到错误后，没有继续抛出错误，后面的then可以继续执行',res);
  throw new Error("catch后的then出错");
})
.catch(err=>{
  throw new Error("后面还需要新的catch处理");
})
.catch(err=>{
  console.log('catch 再次抛出错误',err.message);
})
// ======async/await 的本质=====
async function fn() {
  return 'Hi'
}
fn().then(res=>{
  console.log('async 函数一定会返回一个新的Promise',res);
})
// 上面代码等价于下面
function fn1() {
  return new Promise(resolve=>{
    resolve('Hi')
  })
}
fn1().then(res=>{
  console.log('相当于函数fn返回一个新的Promise',res);
})

async function getData() {
  const result = await Promise.resolve('数据')
  console.log('await 后面常跟promise，他会等待promise完成，拿到成功结果',result);
}
getData()

// ======try/catch在异步代码中的使用=====
async function getUser() {
  try {
    const result = await Promise.resolve({name:'Tom'})
    console.log(result);
  } catch (error) {
    console.log('请求失败',error);
  }
}
getUser()

async function getUser1() {
  try {
    const result = await Promise.reject('用户名或密码错误')
  } catch (error) {
    console.log('登录失败',error);
  }
}

getUser1()

let loading = false
async function handleLogin() {
  try {
    loading = true
    const res = await Promise.resolve({      
      username: 'admin',
      password: '123456'})
    console.log('登陆成功');  
  } catch (error) {
    console.log('登录失败',error);
  } finally{
    loading = false
  }
}

