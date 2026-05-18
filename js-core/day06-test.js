/*
 * @Description: 
   - 手写防抖和节流
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-14 21:20:47
 */

  // 防抖
  function debounce(fn,delay) {
    let timer = null
    return function (...args) {
      clearTimeout(timer)

      timer = setTimeout((()=>{
        fn.apply(this,args)
      }),delay)
    }
  }

  // 节流
  function throttle(fn,delay) {
    let lastTime = 0
    return function (...args) {
      const now = new Date()
      if (now - lastTime >= delay) {
        lastTime = now
        fn.apply(this,args)
      }
    }
  }

  const search = debounce(((params)=>{
    console.log('输入内容：',params);
    
  }),3000)

  search("1")
  search("12")
  search("123")


  const scrollHandel = throttle((()=>{
      console.log('节流限制执行次数');
    }),1000)
  let account = 0
  const setInter = setInterval(()=>{
    account++
    scrollHandel()
    if (account>=10) {
      clearInterval(setInter)
    }
  },200)