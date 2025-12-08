import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

import PublicLayout from '@/layouts/PublicLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const DashboardPage = () => import('@/views/admin/DashboardPage.vue')
const UsersPage = () => import('@/views/admin/UsersPage.vue')
const UserDetailsPage = () => import('@/views/admin/UserDetailsPage.vue')
const ReportsPage = () => import('@/views/admin/ReportsPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PublicLayout,
      meta: { public: true },
      children: [
        { path: '/', component: HomePage },
        { path: 'login', component: LoginPage },
        { path: 'register', component: RegisterPage },
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        { path: 'dashboard', component: DashboardPage },
        { path: 'users', component: UsersPage },
        { path: 'user/:id', component: UserDetailsPage, props: true },
        { path: 'reports', component: ReportsPage }
      ]
    },
    { path: '/:pathMatch(.*)*', component: NotFoundPage }
  ]
})

router.beforeEach((to, _, next) => {
  const isAuth = localStorage.getItem('auth') === 'true'

  if (to.meta.requiresAuth && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
