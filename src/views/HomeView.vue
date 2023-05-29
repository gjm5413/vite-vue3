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

<script setup lang="ts" name="Homes">
import useAppStore from '@/store/modules/app'

// const appStore = useAppStore()
const appStore = useAppStore()

const plusOne = computed(() => {
  return appStore.val
})
</script>

<template>
  <div class="Homes">
    <h1>这里是组件02</h1>
    {{ `参数为${appStore.val}` }}
    <el-input v-model="appStore.val" />
    <button @click="appStore.changeVal(new Date().getTime())">
      改变参数+++++
    </button>
  </div>
</template>

<style lang="scss" scoped>

</style>
