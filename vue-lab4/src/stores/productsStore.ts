import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Laptop', price: 25000 },
      { id: 2, name: 'Smartphone', price: 15000 },
      { id: 3, name: 'Headphones', price: 3000 },
      { id: 4, name: 'Smartwatch', price: 7000 }
    ],
    cart: [] as { id: number; name: string; price: number; qty: number }[]
  }),

  actions: {
    addToCart(productId: number) {
      const product = this.products.find(p => p.id === productId)
      if (!product) return

      const existing = this.cart.find(item => item.id === productId)
      if (existing) {
        existing.qty++
      } else {
        this.cart.push({ ...product, qty: 1 })
      }
    },

    removeFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.id !== productId)
    }
  },

  getters: {
    totalItems: (state) => state.cart.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) => state.cart.reduce((sum, item) => sum + item.qty * item.price, 0)
  }
})
