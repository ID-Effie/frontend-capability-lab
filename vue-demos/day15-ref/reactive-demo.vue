<!--
 * @Description: setup、ref、reactive
 计数器
用户信息编辑
响应式对象更新
ref 和 reactive 对比页
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-26 14:59:05
-->
<script setup lang="ts">
import { ref, reactive } from "vue";
type User = {
  name: string;
  age: number;
  status: boolean;
};
const count = ref(0);
const user = reactive<User>({
  name: "李兰",
  age: 18,
  status: true,
});
const userList = ref<User[]>([]);

function addCount() {
  count.value += 1;
}
function addUserList() {
  userList.value.push({ ...user });
}
// function changeUserAge(params: number) {
//   user.age = params;
// }
</script>
<template>
  <div>
    <div>
      <p>{{ count }}</p>
      <button type="button" @click="addCount">计数器</button>
    </div>
    <div>
      <p>
        用户名：{{ user.name }}，年龄：{{ user.age }}，权限：{{ user.status }}
      </p>
      <button type="button" @click="addUserList">添加用户列表</button>
      <button @click="user.status = !user.status">
        {{ user.status ? "开启" : "关闭" }}
      </button>
      <input v-model="user.name" type="text" placeholder="请输入用户名称" />
      <input
        v-model.number="user.age"
        type="number"
        placeholder="请输入用户年龄"
      />
    </div>
    <div>
      <ul>
        <li v-for="item in userList" :key="`${item.name}-${item.age}`">
          {{ item.name }} - {{ item.age }} - {{ item.status ? "开启" : "关闭" }}
        </li>
      </ul>
    </div>
  </div>
</template>
