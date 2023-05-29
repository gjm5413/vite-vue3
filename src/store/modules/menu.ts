// import { useCookies } from '@vueuse/integrations/useCookies';
// const cookie = useCookies();
// import { getRouters } from '@/api/menu'
import { cloneDeep } from 'lodash-es'

import Layout from '@/layouts/index.vue'

import ParentView from '@/components/ParentView/index.vue'

import menuData from '@/routes.json'

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
  return asyncRouterMap.filter((route) => {
    if (type && route.children) { //
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      }
      else if (route.component === 'ParentView') {
        route.component = ParentView
      }
      else if (route.component === 'InnerLink') {
        route.component = ''
      }
      else { //
        route.component = loadView(route.component)
      }
    }
    if (route.children !== null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type)
    }
    else {
      delete route.children
      delete route.redirect
    }
    return true
  })
}

function filterChildren(childrenMap, lastRouter = false) {
  let children: any[] = []
  childrenMap.forEach((el) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView' && !lastRouter) {
        el.children.forEach((c) => {
          c.path = `${el.path}/${c.path}`
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    if (lastRouter) { //
      el.path = `${(lastRouter as any).path}/${el.path}`
    }

    children = children.concat(el)
  })
  return children
}

// 匹配views里面所有的.vue文件
const modules = import.meta.glob('@/views/**/*.vue')

function loadView(view) {
  let res
  // console.log(view)
  for (const path in modules) {
    const dir = path.split('views/')[1].split('.vue')[0]
    if (dir === view) { //
      res = () => modules[path]()
    }
  }

  return res
}

const useMenuStore = defineStore(
  'menu',
  () => {
    //
    const menu = reactive({
      data: [],
    })
    const sidebarRouters = reactive<any>({
      data: [],
    })
    async function getMenus() {
      return new Promise((resolve, reject) => {
        // const sdata = JSON.parse(JSON.stringify(menuData.data))
        // const sdata = cloneDeep([{ ...menuData.data[1] }])
        const sdata = cloneDeep(menuData.data)
        const rewriteRoutes = filterAsyncRouter(sdata)
        sidebarRouters.data = sdata
        resolve(rewriteRoutes)
      })
    }
    return {
      sidebarRouters,
      getMenus,
      menu,
    }
  },
)

export default useMenuStore
