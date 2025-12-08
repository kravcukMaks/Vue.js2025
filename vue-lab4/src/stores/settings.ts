import { defineStore } from 'pinia'

export type Locale = 'ua' | 'en'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    locale: (localStorage.getItem('locale') as Locale) || 'ua'
  }),

  actions: {
    setLocale(lang: Locale) {
      this.locale = lang
      localStorage.setItem('locale', lang)
    }
  },

  persist: {
    pick: ['locale']
  }
})

