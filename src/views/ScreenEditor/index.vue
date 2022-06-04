<template>
  <div class="screen-editor">
    <HeaderToolbar />
    <div class="screen-editor__content">
      <ComponentsPanel />
      <CanvasMain />
      <ConfigPanel />
    </div>
  </div>
</template>
<script setup lang="ts">
import CanvasMain from './CanvasMain/index.vue'
import HeaderToolbar from './HeaderToolbar/index.vue'
import ConfigPanel from './ConfigPanel/index.vue'
import ComponentsPanel from './ComponentsPanel/index.vue'
</script>
<style lang="scss" scoped>
.screen-editor {
  &__content {
    display: flex;
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
<style lang="scss">
.header-btn {
  width: 40px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgb(255 235 235 / 10%), 0 0 0 1px #181818;
  transition: 0.2s;
  cursor: pointer;
  background-color: #303640;
  color: white;

  &:hover {
    background: #414750;
  }
  &--selected {
    background: #409eff;
    &:hover {
      background: #409eff;
    }
  }
}
</style>
