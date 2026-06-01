<script setup lang="ts">
// import ReactiveDemo from "../vue-demos/day15-ref/reactive-demo.vue";
// import ReactiveDemo from "../vue-demos/day16-computed-watch-watchEffect/product-price-calculation.vue";
// import ReactiveDemo from "../vue-demos/day16-computed-watch-watchEffect/Watch-search-conditions.vue";
// import ReactiveDemo from "../vue-demos/day16-computed-watch-watchEffect/Auto-save-form-drafts.vue";
// import ReactiveDemo from "../vue-demos/day17-生命周期与组件通信/UserFormParent.vue";
// import ReactiveDemo from "../vue-demos/day17-生命周期与组件通信/OrderInfoParent.vue";
// import ReactiveDemo from "../vue-demos/day17-生命周期与组件通信/ThemePanelRoot.vue";
// import ReactiveDemo from "../vue-demos/day18-slot/SlotDemo.vue";
// import ReactiveDemo from "../vue-demos/day19-composable/day19-composable-Demo.vue";
// import ReactiveDemo from "../src/day20-directives/directive-Demo.vue";
import { env } from "@/day22-vite-env-demo/config/env";
import { message } from "@/day22-vite-env-demo/utils/message";
</script>

<template>
  <!-- <ReactiveDemo /> -->

  <!-- day22-Demo -->
  <h1>{{ env.title }}</h1>
  <p>{{ message }}</p>
  <p>接口地址：{{ env.apiBaseUrl }}</p>
  <p>当前模式：{{ env.mode }}</p>
  <p>是否开发环境：{{ env.isDev }}</p>
</template>
