import { defineStore } from 'pinia'

export type Locale = 'ua' | 'en'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    locale: 'ua' as Locale
  }),

  actions: {
    setLocale(newLocale: Locale) {
      this.locale = newLocale
    }
  }
})
