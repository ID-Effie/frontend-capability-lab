<!--
 * @Description: 表单草稿自动保存 demo
重点练 watchEffect 或 watch + deep。

要写的功能：
  表单有标题、内容
  用户输入后自动保存到 localStorage
  页面打开时读取草稿
  展示“已自动保存”
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 09:35:14
-->

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from "vue";

const savedText = ref("");

const form = reactive({
  title: localStorage.getItem("draft-title") || "",
  content: localStorage.getItem("draft-content") || "",
});

watch(
  form,
  () => {
    localStorage.setItem("draft-title", form.title);
    localStorage.setItem("draft-content", form.content);

    savedText.value = `已自动保存：${new Date().toLocaleDateString()}`;
  },
  {
    deep: true,
  },
);
watchEffect(() => {
  console.log("当前草稿：", form.title, form.content);
});
</script>

<template>
  <div>
    <h2>表单草稿自动保存</h2>

    <input v-model="form.title" placeholder="标题" />

    <textarea v-model="form.content" placeholder="内容"></textarea>

    <p>{{ savedText }}</p>
  </div>
</template>
