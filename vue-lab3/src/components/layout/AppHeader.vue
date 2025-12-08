<template>
  <header class="header">
    <h1 class="logo">Vue News</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <button class="theme-btn" @click="toggleTheme">
      {{ theme === 'light' ? '🌙 Dark' : '☀️ Light' }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const theme = ref(localStorage.getItem('theme') || 'light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value)
};

// apply on load
document.documentElement.setAttribute('data-theme', theme.value);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: var(--bg-header);
  color: var(--text);
}

nav a {
  margin: 0 10px;
}

.theme-btn {
  cursor: pointer;
}
</style>
