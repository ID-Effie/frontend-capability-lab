/*
 * @Description: 
  手写 debounce
  手写 throttle
  用输入框或滚动事件模拟使用场景

  要求：
  防抖和节流要写清适用场景  
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-14 14:22:25
 */

  // 防抖：在频繁触发时，只执行最后一次
  // 适用场景：搜索框输入联想、用户输入停止后发起请求、表单校验、窗口resize后重新计算布局
  
  /**
   *  第一次触发：开启一个定时器
      第二次触发：清掉上一次定时器，重新计时
      第三次触发：继续清掉上一次，重新计时
      停止触发 delay 毫秒后：真正执行 fn
   * @param {*} fn 
   * @param {*} delay 
   * @returns 
   */
  function debounce(fn,delay) {
    let timer = null
    
    return function (...args) {
      clearTimeout(timer)

      timer = setTimeout((()=>{
        fn.apply(this,args)
      }),delay)
    }
  }

  const search = debounce(function (keyword) {
    console.log('发送输入请求：',keyword);
  },3000)

  search('1')
  search('12')
  search('123')

  // 模拟输入框
  // input.addEventListener('input',debounce((event)=>{
  //   console.log(event.target.value); 
  // }),500)

  // 节流：在频繁触发时，控制执行频率
  // 适用场景：滚动加载、页面滚动监听、鼠标移动、拖拽过程中的位置计算、高频点击限制

  /**
   *  第一次触发：立即执行
      短时间内继续触发：不执行
      超过 delay 时间后再次触发：执行
      继续按固定间隔执行
   * @param {*} fn 要执行的函数
   * @param {*} delay 时间间隔
   * @returns 
   */
  function throttle(fn,delay) {
    let lastTime = 0

    return function (...args) {
      const now = Date.now()

      if (now - lastTime >= delay) {
        lastTime = now
        fn.apply(this,args)
      }
    }
  }

  const handleScroll = throttle(function a () {
    console.log('处理滚动事件');
  },1000)

  // 三次调用发生在一秒内， a函数只会调用一次
  // handleScroll()
  // handleScroll()
  // handleScroll()

  // 定时器，适合固定周期任务
  let count = 0
  const timerSetInterval = setInterval((()=>{
      count++
      handleScroll()
      if (count >= 10) {
        clearInterval(timerSetInterval)
      }
    }),200)

  // 页面滚动模拟
  // window.addEventListener('scroll',throttle(()=>{
  //   console.log('处理滚动事件');
  // },200))
