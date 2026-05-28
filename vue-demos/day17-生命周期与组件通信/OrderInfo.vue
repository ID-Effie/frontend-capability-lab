<!--
 * @Description: 订单详情父子组件

练习重点：父组件负责数据，子组件负责展示和触发事件。

OrderInfo 不直接处理支付逻辑
它只 emit('pay', order.id)
真正业务逻辑放在父组件
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 20:17:52
-->
<script setup lang="ts">
type Order = {
  id: string;
  productName: string;
  price: number;
  status: string;
};

defineProps<{
  order: Order;
}>();

const emits = defineEmits<{
  pay: [orderId: string];
  cancel: [orderId: string];
}>();
</script>

<template>
  <section>
    <h3>{{ order.productName }}</h3>
    <p>订单号：{{ order.id }}</p>
    <p>价格：{{ order.price }}</p>
    <p>状态：{{ order.status }}</p>

    <button @click="emits('pay', order.id)">支付</button>
    <button @click="emits('cancel', order.id)">取消</button>
  </section>
</template>
