<!--
 * @Description: 
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 20:35:23
-->
<script setup lang="ts">
import { inject, type Ref } from "vue";

// 我注入进来的 theme 是一个 ref，里面的 value 只能是 'light' 或 'dark'
const theme = inject<Ref<"light" | "dark">>("theme");
const toggleTheme = inject<() => void>("toggleTheme");
</script>

<template>
  <div>
    <p>当前主题：{{ theme }}</p>

    <button @click="toggleTheme?.()">切换主题</button>
  </div>
</template>
