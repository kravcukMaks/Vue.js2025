import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from '@/views/ProfilePage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import CartPage from '@/views/CartPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/profile' },
    { path: '/profile', component: ProfilePage },
    { path: '/products', component: ProductsPage },
    { path: '/cart', component: CartPage }
  ]
})

