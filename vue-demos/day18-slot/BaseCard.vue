<!--
 * @Description: 通用卡片组件
目标：练习默认插槽和具名插槽。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-29 11:37:11
-->
<template>
  <div class="base-card">
    <div v-if="$slots.title || $slots.extra" class="base-card_header">
      <div class="base-card_title">
        <slot name="title" />
      </div>

      <div class="base-card_extra">
        <slot name="extra" />
      </div>
    </div>

    <div class="base-card_body">
      <slot />
    </div>
  </div>
</template>
