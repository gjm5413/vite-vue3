<script lang="ts" setup>
import { ref, toRaw } from 'vue'

interface T {
  url: string
}
const dateValue = ref()
const response = ref('')
const fileList = ref([] as Array<T>)
fileList.value.push({ url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' })
function afterRead(file: any) {
  response.value = JSON.stringify(toRaw(file))
  console.log(toRaw(file))
  console.log(toRaw(fileList.value))
}
function blurValue() {
  const date1 = toRaw(dateValue.value[0])
  // console.log(JSON.stringify(date1));
  console.log(date1.getTime())
}
console.log(new Date().getTime())
</script>

<template>
  <div class="upload">
    <h1>This is an upload page</h1>
    <van-uploader
      v-model="fileList"
      :after-read="afterRead"
      preview-image
      preview-full-image
    />
    <!-- <div v-text="response"></div> -->
    <el-date-picker
      v-model="dateValue"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      @blur="blurValue"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .upload {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
