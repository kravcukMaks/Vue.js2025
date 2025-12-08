<template>
  <PublicLayout>
    <h2>Реєстрація</h2>

    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <input v-model="name" type="text" placeholder="Ім'я" required />

      <button type="submit">Створити акаунт</button>
    </form>
  </PublicLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'

const router = useRouter()

const email = ref('')
const password = ref('')
const name = ref('')

const register = () => {
  const user = {
    email: email.value,
    password: password.value,
    name: name.value,
  }

  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('auth', 'true')

  router.push('/admin/dashboard')
}
</script>
