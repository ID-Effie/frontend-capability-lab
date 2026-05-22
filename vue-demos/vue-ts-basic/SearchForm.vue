<!--
 * @Description: 搜索表单组件
      子组件
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-22 14:20:14
-->
<script lang="ts" setup>
import { ref } from "vue";
interface SearchParams {
  keyword: string;
  status: "all" | "enabled" | "disabled";
}

const form = ref<SearchParams>({
  keyword: "",
  status: "all",
});

const emit = defineEmits<{
  search: [params: SearchParams];
  reset: [];
}>();

function handleSearch() {
  emit("search", form.value);
}

function handleReset() {
  form.value = {
    keyword: "",
    status: "all",
  };
  emit("reset");
}

defineExpose({
  handleReset,
});
</script>
<template>
  <div>
    <input v-model="form.keyword" placeholder="请输入关键词" />
    <select v-model="form.status">
      <option value="all">全部</option>
      <option value="enabled">启用</option>
      <option value="disabled">禁用</option>
    </select>
    <button @click="handleSearch">搜索</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
