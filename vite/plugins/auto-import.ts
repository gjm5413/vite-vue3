import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    /* 类型声明文件存放位置 */
    dts: './src/types/auto-import.d.ts',
    dirs: [
      './src/utils/composables/**',
    ],
  })
}
