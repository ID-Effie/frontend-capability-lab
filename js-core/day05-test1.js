/*
 * @Description: 写出 mock 请求函数
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-13 19:26:06
 */

let loading = false

const setLoading = (value)=>{
  loading = value  
  console.log('loading:',loading);
  
}

async function requestMock(params) {
  console.log(params);
  
  return await new Promise((resolve, reject) => {
    setTimeout((()=>{
      if (params.success) {
        resolve({
          code:200,
          message:'请求成功！',
          data:params
        })
      } else {
        reject({
          code:500,
          message:'请求失败～',
          data:null
        })
      }
    }),1000)
  })
} 

async function getUser() {
  try {
    setLoading(true)
    const userInfo = {
      success:true,
      name:'李兰',
    }
    const result = await requestMock(userInfo)
    console.log('getUser请求成功！',result);
  } catch {
    console.log('请求失败');
    
  } finally{
    setLoading(false)
  }
}

async function getManager() {
  try {
    setLoading(true)
    const userInfo = {
      success:false,
      name:'小明',
    }
    const result = await requestMock(userInfo)
    console.log('请求成功！',result);
  } catch(err) {
    console.log('getManager请求失败',err);
    
  } finally{
    setLoading(false)
  }
}

async function test() {
  console.log('=======请求成功案例：======');
  await getUser()

  console.log('=======请求失败案例：======');
  await getManager()
}

test()