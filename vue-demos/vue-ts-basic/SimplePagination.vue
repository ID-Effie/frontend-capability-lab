<!--
 * @Description: 分页组件简化版
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-22 14:56:05
-->
<script setup lang="ts">
import { computed } from "vue";
interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
}
const props = defineProps<{
  paginationProps: PaginationProps;
}>();

const emit = defineEmits<{
  changePage: [page: number];
  changePageSize: [pageSize: number];
}>();
// computed: totalPage
const totalPage = computed(() =>
  Math.ceil(props.paginationProps.total / props.paginationProps.pageSize)
);
</script>

<template>
  <div>
    <button
      :disabled="paginationProps.page <= 1"
      @click="emit('changePage', paginationProps.page - 1)"
    >
      上一页
    </button>
    <span>{{ paginationProps.page }} / {{ totalPage }}</span>
    <button
      :disabled="paginationProps.page >= totalPage"
      @click="emit('changePage', paginationProps.page + 1)"
    >
      下一页
    </button>
    <select
      :value="paginationProps.pageSize"
      @change="
        emit('changePageSize', Number(($event.target as HTMLSelectElement).value))
      "
    >
      <option :value="10">10 条/页</option>
      <option :value="20">20 条/页</option>
      <option :value="50">50 条/页</option>
    </select>
    <span>共 {{ paginationProps.total }} 条</span>
  </div>
</template>
