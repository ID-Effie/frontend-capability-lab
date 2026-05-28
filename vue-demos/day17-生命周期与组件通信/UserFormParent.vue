<!--
 * @Description: 父子表单组件
 练习重点：props 传值、emit 通知父组件更新。

 父组件 username → 子组件 props
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 19:33:14
-->
<script setup lang="ts">
import { ref } from "vue";
import UserForm from "./UserForm.vue";

const username = ref("李兰");

function handleUpdateName(value: string) {
  username.value = value;
}

function handleSubmit() {
  console.log("提交用户名", username.value);
}
</script>
<template>
  <UserForm
    :username="username"
    @update-name="handleUpdateName"
    @submit="handleSubmit"
  />
</template>
