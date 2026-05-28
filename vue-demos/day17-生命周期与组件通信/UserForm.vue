<!--
 * @Description: 
 props 传值、emit 通知父组件更新

 子组件输入变化 → emit 通知父组件修改 username
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 19:32:54
-->
<script setup lang="ts">
defineProps<{
  username: string;
}>();
const emit = defineEmits<{
  updateName: [value: string];
  submit: [];
}>();
</script>
<template>
  <div>
    <input
      :value="username"
      @input="emit('updateName', ($event.target as HTMLInputElement).value)"
    />

    <button @click="emit('submit')">提交</button>
  </div>
</template>
