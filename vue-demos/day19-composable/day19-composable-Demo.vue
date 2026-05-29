<!--
 * @Description: 
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-29 16:44:03
-->

<script setup lang="ts">
import { onMounted } from "vue";
import { useLoading } from "./useLoading";
import { useModal } from "./useModal";
import { usePagination } from "./usePagination";

const { loading, start, stop, toggle } = useLoading();
const mockRequest = () => {
  start();
  setTimeout(() => {
    stop();
  }, 1000);
};

type User = {
  id: number;
  name: string;
};
const { visible, mode, current, openCreate, openEdit, close } =
  useModal<User>();
const user = {
  id: 1,
  name: "Alice",
};

const {
  currentPage,
  pageSize,
  total,
  totalPages,
  setPage,
  setPageSize,
  setTotal,
  reset,
} = usePagination(1, 10);

onMounted(() => {
  setTotal(95);
});
</script>

<template>
  <section>
    <p>loading 状态：{{ loading }}</p>

    <button @click="mockRequest" :disabled="loading">
      {{ loading ? "加载中..." : "模拟搜索" }}
    </button>

    <button @click="toggle">切换 loading</button>
  </section>
  <hr />
  <section>
    <button @click="openCreate">新增用户</button>
    <button @click="openEdit(user)">编辑用户</button>

    <div v-if="visible">
      <h3>{{ mode === "create" ? "新增" : "编辑" }}</h3>
      <p v-if="current">当前用户：{{ current?.name }}</p>
      <p v-else>当前没有选中用户</p>

      <button @click="close">关闭</button>
    </div>
  </section>
  <hr />
  <section>
    <p>当前页：{{ currentPage }}</p>
    <p>每页条数：{{ pageSize }}</p>
    <p>总条数：{{ total }}</p>
    <p>总页数：{{ totalPages }}</p>

    <button @click="setPage(currentPage - 1)" :disabled="currentPage <= 1">
      上一页
    </button>

    <button
      @click="setPage(currentPage + 1)"
      :disabled="currentPage >= totalPages"
    >
      下一页
    </button>

    <button @click="setPageSize(20)">每页20条</button>
    <button @click="reset">重置</button>
  </section>
</template>
