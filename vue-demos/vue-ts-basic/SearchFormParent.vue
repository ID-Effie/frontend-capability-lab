<!--
 * @Description: 搜索表单组件
      父组件
  这个例子覆盖了：
    defineEmits
    ref<T>
    组件实例 ref
    defineExpose
    父子组件事件传递
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-22 14:30:15
-->
<script setup lang="ts">
import { ref } from "vue";
import SearchForm from "./SearchForm.vue";

interface SearchParams {
  keyword: string;
  status: "all" | "enabled" | "disabled";
}

const searchFormRef = ref<InstanceType<typeof SearchForm> | null>(null);

function handleSearch(params: SearchParams) {
  console.log("搜索参数：", params);
}

function handleReset() {
  console.log("已重置");
}

function resetFromParent() {
  searchFormRef.value?.handleReset();
}
</script>

<template>
  <SearchForm ref="searchFormRef" @search="handleSearch" @reset="handleReset" />
  <button @click="resetFromParent">父组件触发重置</button>
</template>
