import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layouts/index.vue'

// 系统路由
const systemRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/index.vue'),
        meta: {
          // title: () => useSettingsStore().settings.home.title,
          breadcrumb: false,
        },
      },
      {
        path: '/vform',
        name: 'vform',
        component: () => import('@/views/vFormview.vue'),
        meta: {
          // title: () => useSettingsStore().settings.home.title,
          breadcrumb: false,
        },
      },
    ],
  },
  {
    path: '/system',
    component: () => import('@/layouts/index.vue'),
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: 'applicationConfig',
        name: 'ApplicationConfig',
        meta: {
          breadcrumb: false,
        },
        children: [

        ],
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import('../views/HomeView.vue')
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import('../views/AboutView.vue')
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import('../views/Login.vue')
  // },
  // {
  //   path: "/upload",
  //   name: "upload",
  //   component: () => import('../views/uploadView.vue')
  // },
  // {
  //   path: "/vform",
  //   name: "vform",
  //   component: () => import('../views/vFormview.vue')
  // }
]

// 静态路由
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/:all(.*)*',
    name: 'notFound',
    component: () => import('@/views/[...all].vue'),
    meta: {
      title: '找不到页面',
    },
  },
]

// 动态路由(异步路由加载)
const asyncRoutes: RouteRecordRaw[] = [

]
// const composeRoutes: RouteRecordRaw[] = setupLayouts(generatedRoutes);

// 静态路由(不需要动态判断权限，如 login、404)
const constantRoutesByFilesystem = generatedRoutes.filter((item) => {
  return item.meta?.enabled !== false && item.meta?.constant === true
})
// 动态路由(通过权限判断后通过 addRoutes 动态添加)
const asyncRoutesByFilesystem = setupLayouts(generatedRoutes.filter((item) => {
  return item.meta?.enabled !== false && item.meta?.constant !== true && item.meta?.layout !== false
}))

console.log('generatedRoutes', generatedRoutes)
// console.log('composeRoutes', composeRoutes);
// console.log('constantRoutesByFilesystem', constantRoutesByFilesystem);
console.log('asyncRoutesByFilesystem', asyncRoutesByFilesystem)

export {
  systemRoutes,
  constantRoutes,
  asyncRoutes,
  constantRoutesByFilesystem,
  asyncRoutesByFilesystem,
}
