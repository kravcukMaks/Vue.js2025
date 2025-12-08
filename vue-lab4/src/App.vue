<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useSettingsStore, type Locale } from '@/stores/settings'
import { useProductsStore } from '@/stores/productsStore'
import { useI18n } from 'vue-i18n'

const settingsStore = useSettingsStore()
const cartStore = useProductsStore()
const { locale, t } = useI18n()

const changeLang = (e: Event) => {
  const newLang = (e.target as HTMLSelectElement).value as Locale
  settingsStore.setLocale(newLang)
  locale.value = newLang
}
</script>

<template>
  <nav class="menu">
    <RouterLink to="/profile">{{ t('nav.profile') }}</RouterLink>
    <RouterLink to="/products">{{ t('nav.products') }}</RouterLink>

    <!-- Показує кількість товарів у кошику -->
    <RouterLink to="/cart">
      {{ t('nav.cart') }} ({{ cartStore.totalItems }})
    </RouterLink>

    <select :value="settingsStore.locale" @change="changeLang">
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  </nav>

  <RouterView />
</template>

<style scoped>
.menu {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 12px;
  background: #f2f2f2;
  margin-bottom: 16px;
}
.menu a {
  text-decoration: none;
  font-weight: 600;
  color: #333;
}
.menu a.router-link-active {
  color: #42b883;
}
</style>
