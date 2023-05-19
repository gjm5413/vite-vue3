<script lang="ts" setup name="sidebarItem">
const props = defineProps(['item', 'basePath'])

const { item, basePath } = props as any

let onlyOneChild = reactive<any>({})

function hasOneShowingChild(children = [], parent) {
  if (!children) { //
    children = []
  }
  const showingChildren = children.filter((item: any) => {
    if (item.hidden) {
      return false
    }
    else { //
      onlyOneChild = item
      return true
    }
  })
  if (showingChildren.length === 1) { //
    return true
  }
  if (showingChildren.length === 0) {
    onlyOneChild = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

function paths(path) {
  return `${basePath}/${path}`
}
function bbb(path) {
  if (!path) { //
    return basePath
  }
  return `/${path}`
}
</script>

<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item :index="bbb(onlyOneChild.path)">
        <span>{{ onlyOneChild.meta?.title }}</span>
      </el-menu-item>
    </template>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="(child, index) in item.children"
        :key="child.path + index"
        :base-path="paths(child.path)"
        :item="child"
      />
    </el-sub-menu>
  </div>
</template>

<style lang="scss" scoped>

</style>
