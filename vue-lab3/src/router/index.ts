import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ArticlePage from '@/views/ArticlePage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/article/:id', component: ArticlePage, props: true },
    { path: '/:pathMatch(.*)*', component: NotFoundPage }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
