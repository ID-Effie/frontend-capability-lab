<!--
 * @Description: 通用列表容器
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-29 11:50:54
-->
<template>
  <div class="base-list">
    <div v-for="item in list" :key="item.id" class="base-list_item">
      <!-- :item="item" 是子组件向父组件暴露数据 -->
      <slot :item="item" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
