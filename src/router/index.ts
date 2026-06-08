import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/login/index.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import DashboardView from "@/views/dashboard/index.vue";
import UserView from "@/views/user/index.vue";
import SettingView from "@/views/setting/index.vue";
import NotPermissionView from "@/views/error/403.vue";
import NotFoundView from "@/views/error/404.vue";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: LoginView,
      meta: {
        title: "登录",
      },
    },
    {
      path: "/",
      component: BaseLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          component: DashboardView,
          meta: {
            title: "首页",
            requiresAuth: true,
            roles: ["admin", "editor", "viewer"],
            permission: "dashboard:view",
          },
        },
        {
          path: "user",
          component: UserView,
          meta: {
            title: "用户管理",
            requiresAuth: true,
            roles: ["admin", "editor"],
            permission: "user:list",
          },
        },
        {
          path: "setting",
          component: SettingView,
          meta: {
            title: "系统设置",
            requiresAuth: true,
            roles: ["admin"],
            permission: "setting:view",
          },
        },
      ],
    },
    {
      path: "/403",
      component: NotPermissionView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to) => {
  // const token = localStorage.getItem("token");
  // const permissions = ["dashboard:view"];
  const authStore = useAuthStore();
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !authStore.token) {
    return {
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    };
  }

  const routeRoles = to.meta.roles as string[] | undefined;
  const routePermission = to.meta.permission as string | undefined;

  if (routeRoles?.length) {
    const hasRole = routeRoles.some((role) => userStore.roles.includes(role));

    if (!hasRole) {
      return "/403";
    }
  }

  if (routePermission && !userStore.permissions.includes(routePermission)) {
    return "/403";
  }

  if (to.meta.title) {
    document.title = `${to.meta.title} - 后台系统`;
  }

  return true;
});

export default router;
