import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// import { cloneDeep } from 'lodash-es';
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { constantRoutes, systemRoutes } from './routes'
import { useUser } from '@/utlis/composables/useUser'

import useMenuStore from '@/store/modules/menu'

// import useUserStore from '@/store/modules/user';

const router = createRouter(
  {
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    // routes 根据情况分配本地路由还是后端路由
    routes: constantRoutes as RouteRecordRaw[],
  },
)

/**
 * 路由前置拦截器
 */
const isGenerate = ref(false)
const { isLoading, progress } = useNProgress()
progress.value = 0.4
router.beforeEach(async (to, from, next) => {
  // 显示进度条
  isLoading.value = true
  const { isLogin } = useUser()
  // const userStore = useUserStore();
  // 是否已登录
  if (isLogin.value) {
    // 注册路由
    if (isGenerate.value) {
      // 如果已登录状态下，进入登录页会强制跳转到主页
      if (to.name === 'login') {
        next({
          name: 'home',
          replace: true,
        })
      }
      else {
        next()
      }
    }
    else {
      // 注册系统路由
      systemRoutes.forEach((item: RouteRecordRaw) => {
        router.addRoute(item)
      })

      // 注册动态路由
      const { getMenus } = useMenuStore()
      const accessRoutes = await getMenus() as any
      accessRoutes.forEach((item: RouteRecordRaw) => {
        router.addRoute(item)
      })

      isGenerate.value = true
      // 路由生成并注册后，重新进入当前路由
      next({
        path: to.path,
        query: to.query,
        replace: true,
      })
    }
  }
  else {
    // 登录状态不存在或者过期时执行
    if (to.name !== 'login') {
      next({
        name: 'login',
      })
    }
    else {
      next()
    }
  }
})

/**
 * 路由后置
 */
router.afterEach((to, from) => {
  // console.log(to.name);
  isLoading.value = false
})

export default router
