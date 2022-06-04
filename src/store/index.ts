import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      name: 'test'
    }
  },
  getters: {},
  actions: {}
})

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      isConfigPanelOpen: true,
      isComponentPanelOpen: true
    }
  },
  getters: {},
  actions: {
    toggleConfigPanel() {
      this.isConfigPanelOpen = !this.isConfigPanelOpen
    },
    toggleComponentPanel() {
      this.isComponentPanelOpen = !this.isComponentPanelOpen
    }
  }
})
