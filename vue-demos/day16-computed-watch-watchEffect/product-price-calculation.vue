<!--
 * @Description: 
  商品价格计算页
  重点练 computed。
  要写的功能：
  商品单价 price
  数量 count
  优惠金额 discount
  自动计算总价 total
  自动计算优惠后价格 finalTotal

  适合：
    商品总价：price * count
    筛选后的列表
    表单摘要
    查询条件的展示文案
    根据状态计算按钮是否禁用

  核心点：
    有缓存：依赖不变，多次读取不会重复计算。
    依赖变了，才会重新计算。
    应该保持纯粹：只负责返回结果，不做请求、不改其他状态、不写 localStorage。
    默认只读，也可以写成带 get/set 的可写 computed。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-28 09:35:14
-->
<script setup lang="ts">
import { ref, computed } from "vue";

const price = ref(99);
const count = ref(1);
const discount = ref(0);
/**
 * total 是响应式数据，而且默认情况下，computed 是只读的
 * 更准确地说：total 是一个 computed ref，也就是计算属性形式的 ref
 * 这里响应关系是单向的
 * price / count 改变 -> total 重新计算
 */
// const total = computed(() => {
//   return price.value * count.value
// })

/**
 * 想让 total 被修改时反过来影响 price 或 count，需要写成可写 computed
 */
const total = computed({
  // total 改变 -> price / count 改变
  get() {
    return price.value * count.value;
  },
  // total 改变 -> price / count 改变
  set(value) {
    price.value = value / count.value;
  },
});

const finalTotal = computed(() => {
  return Math.max(total.value - discount.value, 0);
});
</script>

<template>
  <div>
    <h2>商品价格计算</h2>

    <label>
      单价：
      <input v-model.number="price" type="number" />
    </label>

    <label>
      数量（可重置单价）：
      <input v-model.number="count" type="number" />
    </label>

    <label>
      优惠：
      <input v-model.number="discount" type="number" />
    </label>
    <label>
      <p>原价：{{ total }}</p>
      重置原价：
      <input v-model.number="total" type="number" />
    </label>

    <p>优惠后价格：{{ finalTotal }}</p>
  </div>
</template>
