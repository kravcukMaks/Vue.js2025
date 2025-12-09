import type { App } from 'vue'
import { useToast } from 'primevue/usetoast'

export default {
  install(app: App) {
    const toast = useToast()

    app.config.globalProperties.$copyToClipboard = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        toast.add({
          severity: 'success',
          summary: 'Copied',
          detail: 'Скопійовано в буфер обміну',
          life: 2000
        })
        return true
      } catch (e) {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Не вдалося скопіювати',
          life: 2000
        })
        return false
      }
    }
  }
}
