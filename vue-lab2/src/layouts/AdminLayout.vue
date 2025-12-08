<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <h3>Admin</h3>
      <router-link to="/admin/dashboard">Dashboard</router-link>
      <router-link to="/admin/users">Users</router-link>
      <router-link to="/admin/reports">Reports</router-link>
      <button class="logout" @click="logout">Logout</button>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('auth')
  router.push('/login')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  max-width: 1000px;
  margin: 30px auto;
  gap: 20px;
}

.sidebar {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar a {
  text-decoration: none;
}

.logout {
  margin-top: 20px;
  padding: 8px 12px;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
</style>