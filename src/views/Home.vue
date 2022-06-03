<template>
  <div class="home">{{ store.name }}</div>
  <n-button>Default</n-button>
</template>
<script setup lang="ts">
import { useStore } from '@/store/index'
const store = useStore()
</script>
<style lang="scss">
.home {
  color: red;
}
</style>
