<!--
 * @Description: 搜索条件监听页
重点练 watch。

要写的功能：
  搜索关键词 keyword
  订单状态 status
  页码 page
  当搜索条件变化时，模拟请求接口
  打印新旧值
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 09:34:19
-->

<script setup lang="ts">
import { ref, watch, computed, watchEffect } from "vue";

const keyword = ref("");
const status = ref("all");
const page = ref(1);

const loading = ref(false);
const result = ref<string[]>([]);

// 用 computed 只做“派生结果”
// computed 只负责根据搜索条件算一个展示用摘要。
const searchSummary = computed(() => {
  const conditions: string[] = [];
  if (keyword.value.trim()) {
    conditions.push(`关键词：${keyword.value.trim()}`);
  }
  if (status.value) {
    conditions.push(`状态：${status.value}`);
  }
  conditions.push(`第${page.value}页`);

  return conditions.join("，");
});

// 用 watch 做“明确条件变化后的请求”
// watch 监听明确的数据源：keyword、status、page。
/**
 * watch 明确监听谁，谁变化才触发请求。
watch 可以拿到 newValue 和 oldValue。
watch 适合请求接口、自动保存、同步缓存这类副作用。
 */
watch(
  [keyword, status, page],
  async (
    [newKeyword, newStatus, newPage],
    [oldKeyword, oldStatus, oldPage],
  ) => {
    console.log("旧条件：", oldKeyword, oldStatus, oldPage);
    console.log("新条件：", newKeyword, newStatus, newPage);

    loading.value = true;

    await new Promise((resolve) => setTimeout(resolve, 500));

    result.value = [
      `关键词：${newKeyword || "全部"}`,
      `状态：${newStatus}`,
      `页码：${newPage}`,
    ];

    mockFetchList({
      keyword: newKeyword,
      status: newStatus,
      page: newPage,
    });

    loading.value = false;
  },
  {
    immediate: true,
  },
);

// watchEffect自动追踪里面用到的响应式数据
watchEffect(() => {
  console.log("watchEffect 自动追踪：", keyword.value, status.value);
});

function mockFetchList(params: {
  keyword: string;
  status: string;
  page: number;
}) {
  console.log("模拟请求列表：", params);
}
</script>
<template>
  <div>
    <h2>搜索条件监听</h2>

    <input v-model="keyword" placeholder="请输入关键词" />

    <select v-model="status">
      <option value="all">全部</option>
      <option value="pending">待处理</option>
      <option value="done">已完成</option>
    </select>

    <button @click="page++">下一页</button>

    <p v-if="loading">加载中。。。</p>

    <p>{{ searchSummary }}</p>

    <ul>
      <li v-for="item in result" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
