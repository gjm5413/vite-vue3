<script lang="ts" name="Dept">
// import {
//   ref, defineExpose, onMounted, getCurrentInstance,
// } from 'vue';

// import { ElMessageBox, ElMessage } from 'element-plus';
export default defineComponent({
  name: 'Dept',
  setup() {
    const count = ref(0)
    return {
      count,
    }
  },
  computed: {
    countChange() {
      return this.count
    },
  },
  methods: {
    gogogog() {
      this.count++
    },
  },
})
</script>

<template>
  <div class="dept-shell">
    部门管理
    {{ count }} + {{ countChange + 1 }}
    <el-button @click="gogogog">
      加加
    </el-button>
  </div>
</template>

<style lang="scss" scoped>

</style>
