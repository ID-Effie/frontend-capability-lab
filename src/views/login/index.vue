<template>
  <div>
    <h1>登录页</h1>
    <button @click="login">模拟登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function login() {
  localStorage.setItem("token", "demo-token");
  router.push((route.query.redirect as string) || "/dashboard");
}
</script>
