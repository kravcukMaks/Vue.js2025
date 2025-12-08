import { defineStore } from 'pinia'
import { watch } from 'vue'

export type CartItem = {
  id: number,
  title: string,
  price: number,
  qty: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
  }),

  getters: {
    totalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.qty, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.qty * item.price, 0)
  },

  actions: {
    add(item: CartItem) {
      const existing = this.items.find(i => i.id === item.id)
      if (existing) existing.qty++
      else this.items.push({ ...item, qty: 1 })
    },
    remove(id: number) {
      this.items = this.items.filter(i => i.id !== id)
    },
    clear() {
      this.items = []
    }
  }
})

// 🧠 Авто-збереження кошика
const store = useCartStore()
watch(
  () => store.items,
  (items) => localStorage.setItem('cart', JSON.stringify(items)),
  { deep: true }
)
