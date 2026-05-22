<!--
 * @Description: 父子组件事件类型示例
      父组件
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-22 14:15:53
-->
<script setup lang="ts">
import UserCard from "./UserCard.vue";
interface User {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
  status: "enabled" | "disabled";
}

const user: User = {
  id: 1,
  name: "张三",
  role: "admin",
  status: "enabled",
};

function handleSelect(user: User) {
  console.log(user.name);
}

function handleDelete(id: number) {
  console.log(id);
}
</script>

<template>
  <UserCard :user="user" @select="handleSelect" @delete="handleDelete" />
</template>
