<!--
 * @Description: 
    defineProps：给父组件传入的数据加类型
    defineEmits：给子组件触发的事件加类型
    ref<T>：给响应式数据加类型
    computed<T>：给计算结果加类型
    模板引用类型：给 DOM 或组件实例加类型
    组件暴露类型：理解 defineExpose
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-22 11:08:35
-->
<!--  Vue 组件本质上是三类东西的组合：
 * 输入：props
 * 内部状态：ref / reactive / computed
 * 输出：emits / expose 
 -->

<!-- defineProps：给组件输入加类型 -->
<script setup lang="ts">
interface User {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
  avatar?: string;
}
// 这表示父组件必须传入 <UserCard :user="user" />
// 其中 user 必须符合 User 类型。
// active?: boolean 表示可选属性，父组件可以传，也可以不传。
const props = defineProps<{
  user: User;
  active?: boolean;
}>();
</script>

<!-- props 默认值：withDefaults -->
<script setup lang="ts">
interface Props {
  title?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

// withDefaults 适合给可选 props 设置默认值。
const props = withDefaults(defineProps<Props>(), {
  title: "默认标题",
  size: "medium",
  disabled: false,
});
</script>

<!-- defineEmits：给组件输出事件加类型 -->
<script setup lang="ts">
const emit = defineEmits<{
  select: [id: number];
  delete: [id: number];
  changeStatus: [id: number, status: "enabled" | "disabled"];
}>();

function handleSelect() {
  emit("select", 1001);
}

function handleChangeStatus() {
  // 事件名和参数都会被 TS 检查。
  // emit('selected', 1001) ❌ 写错事件名
  emit("changeStatus", 1001, "enabled");
}
</script>

<!-- 子组件通过 defineEmits 约束事件，父组件处理函数自然就知道该接收什么参数 -->
<!-- 子组件 UserCard.vue： -->
<script setup lang="ts">
interface User {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
}

defineProps<{
  user: User;
}>();

const emit = defineEmits<{
  select: [user: User];
  delete: [id: number];
}>();
</script>
<template>
  <div>
    <div>{{ user.name }}</div>
    <button @click="emit('select', user)">查看</button>
    <button @click="emit('delete', user.id)">删除</button>
  </div>
</template>

<!-- 父组件： -->
<script setup lang="ts">
interface User {
    id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
}
const user:User = {
  id:1,
  name:'孙小妹'
  role:'admin'
}

function handleSelect(user:User) {
  console.log(user.name);
}

function handleDelete(id:number) {
  console.log(id);
}
</script>
<template>
  <UserCard :user="user" @select="handleSelect" @delete="handleDelete" />
</template>

<!-- 模板引用类型：ref 绑定组件 -->
<!-- 子组件 SearchForm.vue -->
<script setup lang="ts">
const keyword = ref("");
function reset() {
  keyword.value = "";
}
function submit() {
  console.log(keyword.value);
}

defineExpose({
  reset,
  submit,
});
</script>
<!-- 父组件： -->
<script setup lang="ts"></script>
