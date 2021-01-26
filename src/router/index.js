import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index"),
        name: "Home",
        meta: { title: "首页", icon: "el-icon-s-home"},
      },
    ],
  },
  {
    path: '/case',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/case/index'),
        name: 'Case',
        meta: { title: '用例管理', icon: 'el-icon-tickets'}
      }
    ]
  },
  {
    path: '/result',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/result/index'),
        name: 'Result',
        meta: { title: '结果管理', icon: 'el-icon-document'}
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/message-management/index'),
        name: 'Message',
        meta: { title: '消息管理', icon: 'el-icon-message'}
      }
    ]
  },
  {
    path: '/node',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/node-management/index'),
        name: 'Node',
        meta: { title: '节点管理', icon: 'el-icon-crop'}
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/system-configuration/index'),
        name: 'System',
        meta: { title: '系统配置', icon: 'el-icon-setting'}
      }
    ]
  },
  {
    path: '/user-center',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/user-center/index'),
        name: 'UserCenter',
        meta: { title: '个人中心', icon: 'el-icon-user-solid'}
      }
    ]
  },
  {
    path: '/user-management',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/user-management/index'),
        name: 'UserManagement',
        meta: { title: '用户管理', icon: 'el-icon-s-custom'}
      }
    ]
  },
];

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router;
