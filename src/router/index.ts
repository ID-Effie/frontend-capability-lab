import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/login/index.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import DashboardView from "@/views/dashboard/index.vue";
import UserView from "@/views/user/index.vue";
import NotPermissionView from "@/views/error/403.vue";
import NotFoundView from "@/views/error/404.vue";

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
          },
        },
        {
          path: "user",
          component: UserView,
          meta: {
            title: "用户管理",
            requiresAuth: true,
            permission: "user:list",
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
  const token = localStorage.getItem("token");
  const permissions = ["dashboard:view"];

  if (to.meta.requiresAuth && !token) {
    return {
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    };
  }

  if (
    to.meta.permission &&
    !permissions.includes(to.meta.permission as string)
  ) {
    return "/403";
  }

  if (to.meta.title) {
    document.title = `${to.meta.title} - 后台系统`;
  }

  return true;
});

export default router;
