import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import { createPinia } from 'pinia'
import 'primeflex/primeflex.css'

import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(ToastService)

app.component('Toast', Toast)

app.mount('#app')
