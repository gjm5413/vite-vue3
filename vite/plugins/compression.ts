import compression from 'vite-plugin-compression'

/* 文件打包压缩 */
export default function createCompression() {
  return compression({
    deleteOriginFile: false,
    threshold: 10240,
  })
}
