<script lang="ts" setup name="sidebar">
// console.log(123);
import sidebarItem from './sidebarItem.vue'
import useMenuStore from '@/store/modules/menu'

const { sidebarRouters } = useMenuStore()
</script>

<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical"
        router
        default-active="2"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>菜单01</span>
          </template>
          <el-menu-item index="/">
            home
          </el-menu-item>
          <el-menu-item index="/vform">
            vform设计器
          </el-menu-item>
          <el-menu-item index="1-3">
            item three
          </el-menu-item>
        </el-sub-menu>
        <sidebar-item
          v-for="(route, index) in sidebarRouters.data"
          :key="`${index}+${route.path}`"
          :base-path="route.path"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  width: 230px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

:deep(.el-scrollbar__view)  {
  height: 100%;
}
.el-menu-vertical {
  // width: 230px;
  height: 100%;
}
</style>
