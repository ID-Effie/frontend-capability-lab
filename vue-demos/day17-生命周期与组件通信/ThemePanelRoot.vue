<!--
 * @Description: 
 provide / inject 主题 demo
练习重点：跨层级共享数据，不用一层层传 props。

适用场景：
  主题
  权限
  当前登录用户
  表单上下文
  多层嵌套组件共享配置

不适用场景：
  父子之间的简单传值
  需要清晰追踪数据流的业务数据
  高频变化、复杂业务状态，可能更适合 Pinia
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 20:35:56
-->
<template>
  <ThemePanel />
</template>
<script setup lang="ts">
import ThemePanel from "./ThemePanel.vue";
import { ref, provide } from "vue";

// 父组件 provide 出去的是一个 ref
// theme 本身不是普通字符串，而是一个响应式对象
// Ref<'light' | 'dark'>
// 真实结构可以粗略理解成：
// {
//   value: 'light'
// }
const theme = ref<"light" | "dark">("light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  console.log("主题：", theme.value);
}

provide("theme", theme);
provide("toggleTheme", toggleTheme);
</script>
