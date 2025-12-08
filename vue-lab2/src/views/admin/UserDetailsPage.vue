<template>
  <div>
    <h2>User details</h2>

    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>

    <button @click="router.back()">Назад</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const user = computed(() => ({
  id: Number(route.params.id),
  name: 'User ' + route.params.id,
  email: `user${route.params.id}@gmail.com`
}))
</script>

<style scoped>
button {
  padding: 8px 16px;
}
</style>
