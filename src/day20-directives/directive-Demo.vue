<!--
 * @Description:  Demo 页面
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-30 16:43:47
-->
<script setup lang="ts">
const orderNo = "ORDER-20260530-001";
</script>

<template>
  <div>
    <h2>自定义指令 Demo</h2>

    <input v-focus placeholder="自动聚焦输入框" />

    <div>
      <button v-permission="'user:create'">新增用户</button>
      <button v-permission="'user:update'">编辑用户</button>
      <button v-permission="'user:delete'">删除用户</button>
    </div>

    <button v-copy="orderNo">复制订单号</button>
  </div>
</template>
