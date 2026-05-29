<!--
 * @Description: 表格操作列作用域插槽 demo
目标：理解后台项目最常见的插槽场景。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-29 12:06:03
-->
<template>
  <table border="1" cellpadding="8">
    <thead>
      <tr>
        <th>名称</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.status }}</td>
        <td>
          <slot name="actions" :row="row" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
</script>
