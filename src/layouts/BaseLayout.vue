<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const authStore = useAuthStore();
const userStore = useUserStore();

const menus = [
  {
    title: "首页",
    path: "/dashboard",
    permission: "dashboard:view",
    roles: ["admin", "editor", "viewer"],
  },
  {
    title: "用户管理",
    path: "/user",
    permission: "user:list",
    roles: ["admin", "editor"],
  },
  {
    title: "系统设置",
    path: "/setting",
    permission: "setting:view",
    roles: ["admin"],
  },
];

// 根据权限过滤菜单 demo
const visibleMenus = computed(() => {
  return menus.filter((menu) => {
    const hasRole = menu.roles.some((role) => userStore.roles.includes(role));
    const hasPermission = userStore.permissions.includes(menu.permission);

    return hasRole && hasPermission;
  });
});

function logout() {
  authStore.logout();
  userStore.clearUserInfo();
  router.push("/login");
}
</script>

<template>
  <div>
    <h2>后台布局</h2>
    <p>
      当前用户：{{ userStore.userInfo?.nickname }} / 角色：{{
        userStore.roles.join(", ")
      }}
    </p>

    <nav>
      <RouterLink v-for="menu in visibleMenus" :key="menu.path" :to="menu.path">
        {{ menu.title }}
      </RouterLink>
    </nav>
    <button @click="logout">退出登录</button>

    <main>
      <RouterView />
    </main>
  </div>
</template>
