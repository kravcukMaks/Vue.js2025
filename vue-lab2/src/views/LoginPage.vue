<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

function login() {
  if (email.value === 'admin@gmail.com' && password.value === '123456') {
    localStorage.setItem('auth', 'true')
    router.push('/admin/dashboard')
  } else {
    error.value = 'Невірний email або пароль'
  }
}
</script>

<template>
  <PublicLayout>
    <h2>Вхід</h2>

    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Увійти</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </PublicLayout>
</template>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>
