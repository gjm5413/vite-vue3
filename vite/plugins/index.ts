import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

/** 打包后的js文件增加注释 */
import createBanner from './banner'

/** <script>标签下页面name名称命名 */
import createSetupExtend from './setup-extend'

/** gzip文件打包压缩 */
import createCompression from './compression'

/** 打包分割与指定组件或插件合并 */
import createChunkSplitPlugin from './chunk-split-plugin'

/** 主要API统一自动注册 */
import createAutoImport from './auto-import'

/** (vite-plugin-pages)根据 .vue文件自动生成路由 */
import createPages from './pages'

/** 与vite-plugin-pages配套的路由生成插件 */
import createLayouts from './layouts'

/** 将一些信息注入到页面上以方便调试 */
import createInspector from './inspector'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const createVitePlugins: (PluginOption | PluginOption[])[] = [vue()]
  createVitePlugins.push(createBanner())
  createVitePlugins.push(createSetupExtend())
  createVitePlugins.push(createCompression())
  createVitePlugins.push(createChunkSplitPlugin())
  createVitePlugins.push(createAutoImport())
  createVitePlugins.push(createPages())
  createVitePlugins.push(createLayouts())
  createVitePlugins.push(createInspector())

  return createVitePlugins
}
