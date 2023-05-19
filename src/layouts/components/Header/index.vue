<script lang="ts" setup name="Header">
// console.log(123);
import Cookies from 'js-cookie'

import router from '@/router'

function logout() {
  Cookies.remove('token')
  router.push('/login')
}
</script>

<template>
  <div>顶部工具栏</div>
  <div>
    <el-button type="primary" @click="logout">
      退出登录
    </el-button>
  </div>
</template>

<style lang="scss" scoped>

</style>
