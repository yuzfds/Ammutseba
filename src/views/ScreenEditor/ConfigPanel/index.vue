<template>
  <div :class="['config-panel', !isConfigPanelOpen && 'config-panel--hidden']"></div>
</template>
<script lang="ts" setup>
import { useLayoutStore } from '@/store'
import { storeToRefs } from 'pinia'

const layoutStore = useLayoutStore()
const { isConfigPanelOpen } = storeToRefs(layoutStore)
</script>
<style lang="scss" scoped>
.config-panel {
  z-index: 90;
  width: 332px;
  height: 100%;
  overflow: hidden;
  background-color: #22282c;
  box-shadow: -1px 0 #000;
  transition: width 0.25s ease-in-out;
  &--hidden {
    width: 0;
  }
}
</style>
