<template>
  <div>
    <h2>Users</h2>

    <ul class="users-list">
      <li
        v-for="user in users"
        :key="user.id"
        @click="goToUser(user.id)"
      >
        {{ user.name }} — {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// імітація бекенду
const users = ref([
  { id: 1, name: 'Max', email: 'max@gmail.com' },
  { id: 2, name: 'Anna', email: 'anna@gmail.com' },
  { id: 3, name: 'John', email: 'john@gmail.com' }
])

function goToUser(id: number) {
  router.push(`/admin/user/${id}`)
}
</script>

<style scoped>
.users-list {
  list-style: none;
  padding: 0;
}

.users-list li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.users-list li:hover {
  background: #eee;
}
</style>
