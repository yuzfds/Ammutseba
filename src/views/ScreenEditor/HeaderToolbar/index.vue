<template>
  <div class="h-40px bg-[#1d1f1e] flex">
    <div class="htb__btn-groups">
      <div
        :class="[
          'header-btn',
          'htb__btn-groups__btn',
          isComponentPanelOpen && 'header-btn--selected'
        ]"
        @click="handleToggleComponentPanel"
      >
        <Icon icon="carbon:development" />
      </div>
      <div
        :class="['header-btn', 'htb__btn-groups__btn', isConfigPanelOpen && 'header-btn--selected']"
        @click="handleToggleConfigPanel"
      >
        <Icon icon="carbon:open-panel-filled-right" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLayoutStore } from '@/store'
import { storeToRefs } from 'pinia'
const layoutStore = useLayoutStore()
const { isConfigPanelOpen, isComponentPanelOpen } = storeToRefs(layoutStore)
const handleToggleConfigPanel = () => {
  layoutStore.toggleConfigPanel()
}
const handleToggleComponentPanel = () => {
  layoutStore.toggleComponentPanel()
}
</script>
<style lang="scss" scoped>
.htb {
  &__btn-groups {
    display: flex;
    align-items: center;
    &__btn {
      margin-left: 10px;
    }
  }
}
</style>
