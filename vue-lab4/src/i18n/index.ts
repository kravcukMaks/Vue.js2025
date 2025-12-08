import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ua from '../locales/ua.json'

const saved = localStorage.getItem('locale') as 'ua' | 'en' | null

const i18n = createI18n({
  legacy: false,
  locale: saved || 'ua',
  messages: { en, ua }
})

export { i18n }
