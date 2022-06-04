<template>
  <div :class="['cp', isComponentPanelOpen && 'cp--hidden']"></div>
</template>
<script lang="ts" setup>
import { useLayoutStore } from '@/store'
import { storeToRefs } from 'pinia'

const layoutStore = useLayoutStore()
const { isComponentPanelOpen } = storeToRefs(layoutStore)
</script>
<scss lang="scss" scoped>
.cp {
  height: 100%;
  width: 324px;
  overflow: hidden;
  background-color: #22282c;
  box-shadow: -1px 0 #000;
  transition: width 0.25s ease-in-out;
  &--hidden {
    width: 45px;
  }
}
</scss>
