import { defineStore } from 'pinia'

type CartItem = {
  id: number
  name: string
  price: number
  count: number
}

type Product = {
  id: number
  name: string
  price: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [
      { id: 1, name: 'Product A', price: 120 },
      { id: 2, name: 'Product B', price: 250 },
      { id: 3, name: 'Product C', price: 70 }
    ] as Product[],
    cart: [] as CartItem[]
  }),

  getters: {
    total: (state) =>
      state.cart.reduce((sum, item) => sum + item.price * item.count, 0)
  },

  actions: {
    addProduct(product: Product) {
      const existing = this.cart.find((p) => p.id === product.id)
      if (existing) {
        existing.count++
      } else {
        this.cart.push({ ...product, count: 1 })
      }
    },
    removeProduct(index: number) {
      this.cart.splice(index, 1)
    }
  }
})
