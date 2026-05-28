<!--
 * @Description: 
 订单详情父子组件

练习重点：父组件负责数据，子组件负责展示和触发事件。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 20:18:03
-->
<template>
  <OrderInfo :order="order" @pay="handlePay" @cancel="handleCancel" />
</template>

<script setup lang="ts">
import OrderInfo from "./OrderInfo.vue";
const order = {
  id: "20260528001",
  productName: "Vue 课程",
  price: 199,
  status: "待支付",
};
function handlePay(orderId: string) {
  console.log("支付订单：", orderId);
}

function handleCancel(orderId: string) {
  console.log("取消订单：", orderId);
}
</script>
