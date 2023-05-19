// import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'

// https://cn.vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // const { VITE_APP_ENV } = env
  // console.log(env);
  
  return {
    base: '/',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        // '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src'),
        '#': path.resolve(__dirname, './src/types'),
      }
    },
    optimizeDeps: {
      include: ['@/../lib/vform/designer.umd.js']  // 此处路径必须跟main.js中import路径完全一致！
    },
    build: {
      // outDir 设置了自定义名称后，vite-plugin-banner 功能会失效
      // outDir: 'mes',
      commonjsOptions: {
        include: /node_modules|lib/
      },
      // rollupOptions: {
      //   output: {
      //       // key自定义 value[] 插件同步package.json名称 或 src/相对路径下的指定文件 （自己可以看manualChunks ts类型）
      //       manualChunks: {
      //         // vue vue-router合并打包
      //         vue: ['vue', 'vue-router'],
      //         vform3: ['@/../lib/vform/designer.umd.js']
      //       }
      //   }
      // }
    },
    server: {
      host: true,
      open: false,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/dev-api': {
          target: 'http://192.168.1.119:29080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      }
    }
  }
})
