<!--
 * @Description: 测试页面，把三个组件都引入测试一遍
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-29 11:38:12
-->
<template>
  <BaseCard>
    <template #title> 客户信息 </template>

    <template #extra>
      <button>编辑</button>
    </template>

    <p>客户名称：李兰</p>
    <p>客户等级：VIP</p>
  </BaseCard>
  <hr />

  <BaseList :list="users">
    <template #default="{ item }">
      <div>
        <strong>{{ item.name }}</strong>
        <span>{{ item.role }}</span>
      </div>
    </template>
  </BaseList>
  <hr />

  <BaseTable :data="customers">
    <template #actions="{ row }">
      <button @click="editCustomer(row)">编辑</button>
      <button @click="deleteCustomer(row)">删除</button>
    </template>
  </BaseTable>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";
import BaseList from "./BaseList.vue";
import BaseTable from "./BaseTable.vue";

const users = [
  { id: 1, name: "张三", role: "管理员" },
  { id: 2, name: "李四", role: "销售" },
  { id: 3, name: "王五", role: "客服" },
];

const customers = [
  { id: 1, name: "客户A", status: "正常" },
  { id: 2, name: "客户B", status: "禁用" },
  { id: 3, name: "客户C", status: "正常" },
  { id: 4, name: "客户D", status: "禁用" },
];
const editCustomer = (row) => {
  console.log("编辑", row);
};
const deleteCustomer = (row) => {
  console.log("删除", row);
};
</script>
