<script lang="ts" setup name="sidebar">
// console.log(123);
// import sidebarItem from './sidebarItem.vue'
// import useMenuStore from '@/store/modules/menu'

// const { sidebarRouters } = useMenuStore()

import router from '@/router'

import useTagsStore from '@/store/modules/tags'

const tagsStore = useTagsStore()

const activeMenu = computed(() => tagsStore.active)

function goto(path: string) {
  router.push({ path, replace: true })
}
</script>

<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical"
        :default-active="activeMenu"
        :unique-opened="true"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>菜单01</span>
          </template>
          <el-menu-item index="/" @click="goto('/')">
            home
          </el-menu-item>
          <el-menu-item index="1-3" @click="goto('/1-3')">
            测试404错误
          </el-menu-item>
          <el-menu-item index="/system/applicationConfig/dept" @click="goto('/system/applicationConfig/dept')">
            部门管理
          </el-menu-item>
          <el-menu-item index="/system/applicationConfig/user" @click="goto('/system/applicationConfig/user')">
            用户管理
          </el-menu-item>
          <!-- <el-menu-item index="/vform">
            vform设计器
          </el-menu-item> -->
        </el-sub-menu>
        <!-- <sidebar-item
          v-for="(route, index) in sidebarRouters.data"
          :key="`${index}+${route.path}`"
          :base-path="route.path"
          :item="route"
        /> -->
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
