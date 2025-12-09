<template>
  <header class="header surface-card shadow-2">
    <div class="container flex justify-content-between align-items-center">
      <h2 class="font-bold">TaskFlow</h2>

      <nav class="flex gap-4 menu">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          :class="['menu-item', { active: activeSection === item.id }]"
          @click="setActive(item.id)"
        >
          {{ $t(item.label) }}
        </a>
      </nav>

      <!-- Switch Language -->
      <select v-model="localeModel" class="lang-select">
        <option value="ua">UA</option>
        <option value="en">EN</option>
      </select>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'

const menuItems = [
  { id: 'hero', label: 'nav.home', href: '#hero' },
  { id: 'pricing', label: 'nav.pricing', href: '#pricing' },
  { id: 'contact', label: 'nav.contact', href: '#contact' }
]

const activeSection = ref('hero')
const setActive = (id: string) => {
  activeSection.value = id
}

// i18n + store sync
const settingsStore = useSettingsStore()
const { locale } = useI18n()

const localeModel = ref(settingsStore.locale)

watch(localeModel, (val) => {
  settingsStore.setLocale(val)
  locale.value = val
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 12px 0;
  backdrop-filter: blur(6px);
}

.container {
  max-width: 1100px;
  margin: auto;
  width: 100%;
}

.menu-item {
  text-decoration: none;
  font-weight: 500;
  color: var(--text-color);
  transition: 0.2s;
}

.menu-item:hover {
  color: var(--primary-color);
}

.menu-item.active {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

.lang-select {
  border-radius: 6px;
  padding: 4px 6px;
}
</style>
