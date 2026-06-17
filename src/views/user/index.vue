<template>
  <section>
    <h1>用户管理</h1>
    <p>这里是 user 页面，用来验证 permission 权限判断。</p>

    <h2>指令方案：v-permission</h2>
    <button v-permission="'user:create'">新增用户</button>
    <button v-permission="'user:update'">编辑用户</button>
    <button v-permission="'user:delete'">删除用户</button>

    <h2>组件方案：PermissionButton</h2>
    <PermissionButton permission="user:create">组建新增</PermissionButton>
    <PermissionButton permission="user:update">组建编辑</PermissionButton>
    <PermissionButton permission="user:delete">组建删除</PermissionButton>
  </section>
</template>

<script setup lang="ts">
import PermissionButton from "@/components/day31-PermissionButton.vue";
</script>
