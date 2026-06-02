<template>
  <div>
    <h2>后台布局</h2>
    <nav>
      <RouterLink to="/dashboard">首页</RouterLink>
      <RouterLink to="/user">用户管理</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>
