<script setup lang="ts" name="vform">
import { ref } from 'vue'

const vfdRef = ref(null)
</script>

<template>
  <div class="vform">
    <v-form-designer ref="vfdRef" />
  </div>
</template>
