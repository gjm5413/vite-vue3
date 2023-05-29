<script setup lang="ts" name="tags">
import router from '@/router'

import useTagsStore from '@/store/modules/tags'

const tagsStore = useTagsStore()

// 缓存的tags标签列表
const tabsviews = computed(() => {
  const source = {
    path: '/',
    meta: {
      title: '首页',
    },
  }
  return [{ ...source }, ...tagsStore.data.cacheViews]
})

function close(i) {
  tagsStore.singleTagsClose(i - 1)
}

function goto(path: string) {
  router.push({ path, replace: true })
}

function aaaaa(item) {
  console.log(item)
}
</script>

<template>
  <div class="tabs-view">
    <template v-if="tabsviews.length">
      <el-dropdown
        v-for="(item, index) in tabsviews"
        :key="index + item.path"
        trigger="contextmenu"
        @visible-change="aaaaa"
      >
        <el-tag
          size="default"
          disable-transitions
          :type="tagsStore.active === item.path ? '' : 'info'"
          :effect="tagsStore.active === item.path ? 'dark' : 'plain'"
          :closable="item.path !== '/'"
          @click="goto(item.path)"
          @close="close(index)"
        >
          {{ item.meta.title }}
        </el-tag>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              刷新页面
            </el-dropdown-item>
            <el-dropdown-item>
              关闭当前
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.tabs-view {
  padding: 4px;
  :deep(.el-tag) {
    cursor: pointer;
  }
  :deep(.el-dropdown + .el-dropdown) {
    margin-left: 5px;
  }
}
</style>
