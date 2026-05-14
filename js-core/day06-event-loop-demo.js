/*
 * @Description: 
  - `console.log`
  - `setTimeout`
  - `Promise.then`
  - `async/await`
  - 预测输出：A D E 1 C F 2 3 B
  - 验证方式：node day06-event-loop-demo.js
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-14 11:00:23
 */

  console.log(("A"));
  
  setTimeout((()=>{
    console.log("B");
  }),0)

  Promise.resolve().then(()=>{
    console.log("C");
  })

  console.log("D");

  new Promise((resolve) => {
    console.log("E");
    resolve()
  }).then(()=>{
    console.log("F");
    
  })

  async function number() {
    console.log("1");
    const result = await Promise.resolve(()=>{
      console.log('2');
    })
    result()
  }

  number().then(()=>{
    console.log('3');
  })
  
  