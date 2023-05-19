import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

export default function createChunkSplitPlugin() {
  return chunkSplitPlugin({
    strategy: 'default',
    customSplitting: {
      vue: ['vue', 'vue-router'],
    },
  })
}
