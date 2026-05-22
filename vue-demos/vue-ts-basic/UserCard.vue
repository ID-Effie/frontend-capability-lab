<!--
 * @Description: 父子组件事件类型示例
      子组件 UserCard.vue
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-22 14:14:12
-->
<script setup lang="ts">
interface User {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
  status: "enabled" | "disabled";
}

defineProps<{
  user: User;
}>();

const emit = defineEmits<{
  select: [user: User];
  delete: [id: number];
}>();
</script>

<template>
  <div>
    <div>{{ user.name }}</div>
    <button @click="emit('select', user)">查看</button>
    <button @click="emit('delete', user.id)">删除</button>
  </div>
</template>
