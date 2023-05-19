<route lang="yaml">
# name: '123456'
# path: /
# meta:
# layout: false
# title:
# constant: true
# cache: true
# enabled: false
</route>

<script setup lang="ts" name="about">
// import HelloWorld from '@/components/HelloWorld.vue';

// console.log(HelloWorld);
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <component :is="view" /> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {

    display: flex;
    align-items: center;
  }
}
</style>
