import { ViteEjsPlugin } from 'vite-plugin-ejs'

export default function createEjs(env: any) {
  return ViteEjsPlugin({
    title: env.VITE_APP_TITLE,
  })
}
