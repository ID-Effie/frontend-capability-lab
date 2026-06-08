<template>
  <section>
    <h1>用户管理</h1>
    <p>这里是 user 页面，用来验证 permission 权限判断。</p>

    <button v-permission="'user:add'">新增用户</button>
    <button v-permission="'user:edit'">编辑用户</button>
    <button v-permission="'user:delete'">删除用户</button>
  </section>
</template>
