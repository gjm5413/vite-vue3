<script lang="ts" setup name="Layout">
import Header from './components/Header/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import Tags from './components/Tags/index.vue'

function getRoute(route: any) {
  return route.name
}
</script>

<template>
  <Sidebar />
  <div class="main-container">
    <div class="fixed-header">
      <Header />
      <Tags />
    </div>
    <section class="">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" />
        <div :title="getRoute(route)" />
      </RouterView>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  margin-left: 230px;
  position: relative;
  .fixed-header {
    border-bottom: 1px solid #dcdfe6;
  }
}
</style>
