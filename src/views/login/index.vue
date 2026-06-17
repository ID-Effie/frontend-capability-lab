<template>
  <div>
    <h1>登录页</h1>
    <p>当前 token：{{ authStore.token || "未登录" }}</p>
    <p>当前用户：{{ userStore.userInfo?.nickname || "无" }}</p>

    <button @click="loginAsAdmin">管理员登录</button>
    <button @click="loginAsEditor">编辑员登录</button>
    <button @click="loginAsViewer">访客登录</button>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";

const authStore = useAuthStore();
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

function getRedirectPath() {
  const redirect = route.query.redirect;

  if (typeof redirect === "string" && redirect.startsWith("/")) {
    return redirect;
  }

  return "/dashboard";
}

function logout() {
  authStore.logout();
  userStore.clearUserInfo();
}

function loginAsAdmin() {
  authStore.setToken("day27-mock-token-admin");

  userStore.setUserInfo({
    id: 1,
    username: "admin",
    nickname: "管理员",
    roles: ["admin"],
    permissions: [
      "dashboard:view",
      "user:list",
      "user:create",
      "user:update",
      "user:delete",
      "setting:view",
    ],
  });

  router.push(getRedirectPath());
}

function loginAsEditor() {
  authStore.setToken("day27-mock-token-editor");

  userStore.setUserInfo({
    id: 2,
    username: "editor",
    nickname: "编辑员",
    roles: ["editor"],
    permissions: ["dashboard:view", "user:list", "user:create", "user:update"],
  });

  router.push(getRedirectPath());
}

function loginAsViewer() {
  authStore.setToken("mock-token-viewer");

  userStore.setUserInfo({
    id: 3,
    username: "viewer",
    nickname: "访客",
    roles: ["viewer"],
    permissions: ["dashboard:view"],
  });

  router.push(getRedirectPath());
}
</script>
