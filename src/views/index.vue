<route lang="yaml">
name: home
meta:
  title: 主页
</route>

<script setup lang="ts" name="home">
import about from './AboutView.vue'
import home from './HomeView.vue'
</script>

<template>
  <div class="home">
    <about class="flex" />
    <home class="flex" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  .flex {
    flex: 1;
  }
}
</style>
