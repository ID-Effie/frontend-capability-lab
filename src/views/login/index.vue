<template>
  <div>
    <h1>登录页</h1>
    <p>当前 token： {{ authStore.token || "未登录" }}</p>
    <button @click="mockLogin">模拟登录</button>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";

const authStore = useAuthStore();
const userStore = useUserStore();

function mockLogin() {
  authStore.setToken("mock-token-day24");

  userStore.setUserInfo({
    id: 1,
    username: "admin",
    nickname: "管理员",
    roles: ["admin"],
  });
}
function logout() {
  authStore.logout();
}
</script>
