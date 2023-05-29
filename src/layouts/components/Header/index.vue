<script lang="ts" setup name="Header">
// console.log(123);

import Cookies from 'js-cookie'

import router from '@/router/index'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

function logout() {
  Cookies.remove('token')
  router.push('/login')
}
</script>

<template>
  <div class="headers">
    <div>顶部工具栏 参数为 {{ appStore.val }}</div>
    <div class="h-right">
      <el-button type="primary" @click="logout">
        退出登录
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .headers {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    .h-right {
      margin-left: auto;
    }
  }
</style>
