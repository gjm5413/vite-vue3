import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

import App from './App.vue'
import store from './store'
import router from './router'

import './assets/main.css'

import 'nprogress/nprogress.css'

/* vForm 表单构建器 */
// import VForm3 from '@/../lib/vform/designer.umd.js'
// import '../lib/vform/designer.style.css'

// import './permission'; // permission control

/* import.meta 匹配路径下的里面所有文件 */
// const modules = import.meta.glob('./views/**/**/*.vue');
// console.log(Object.keys(modules));
// console.log(modules);

// typescript 测试文件
// import './composables/test'
// import './composables/useTest'

const app = createApp(App)

for (const iconName in ElIcons) {
  /**
  * ElIcons as keyof typeof ElIcons
  * 元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型
  */
  app.component(iconName, ElIcons[iconName as keyof typeof ElIcons])
}

app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.use(VForm3)
app.mount('#app')
