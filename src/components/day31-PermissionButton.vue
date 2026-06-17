<!--
 * @Description: 根据权限决定按钮是否渲染。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-12 16:49:52
-->
<template>
  <button v-if="hasPermission" :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const props = withDefaults(
  defineProps<{
    permission: string;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    // 如果外部没有传 type，就默认使用 "button"
    type: "button",
  },
);

defineEmits<{
  click: [];
}>();

const userStore = useUserStore();

const hasPermission = computed(() => {
  return userStore.permissions.includes(props.permission);
});
</script>
