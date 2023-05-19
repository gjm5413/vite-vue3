<route lang="yaml">
name: home
meta:
  title: 主页
</route>

<script setup lang="ts" name="home">
// import { getPage } from '@/api/login';

// async function pagetext() {
//   const res = await getPage(123);
//   // console.log(res);
// }
</script>

<template>
  <div class="home">
    <div>
      <div class="">
        主页面
      </div>
      <el-button type="primary">
        page接口测试
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
