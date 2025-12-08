<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

onMounted(() => {
  const saved = localStorage.getItem('theme') as Theme | null
  if (saved === 'light' || saved === 'dark') {
    theme.value = saved
  }
  document.documentElement.setAttribute('data-theme', theme.value)
})

watch(theme, (val) => {
  localStorage.setItem('theme', val)
  document.documentElement.setAttribute('data-theme', val)
})

const appClasses = computed(() => ({
  app: true,
  'app--dark': theme.value === 'dark'
}))

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div :class="appClasses">
    <AppHeader :theme="theme" @toggle-theme="toggleTheme" />

    <main class="app-main">
      <Transition name="route-fade" mode="out-in">
        <RouterView />
      </Transition>
    </main>

    <AppFooter />
  </div>
</template>
