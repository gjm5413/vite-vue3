<script setup lang="ts" name="helloworld">
console.log('测试测试')
onActivated(() => {
  console.log('onActivated执行了')
})
onDeactivated(() => {
  console.log('onDeactivated执行了')
})
</script>

<template>
  <div class="hello-world">
    你好你好你好你好
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
