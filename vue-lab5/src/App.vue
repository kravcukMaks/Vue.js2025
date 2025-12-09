<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useSettingsStore, type Locale } from '@/stores/settings'
import { useI18n } from 'vue-i18n'

const settingsStore = useSettingsStore()
const { locale } = useI18n()

const changeLang = (e: Event) => {
  const newLang = (e.target as HTMLSelectElement).value as Locale

  settingsStore.setLocale(newLang)
  locale.value = newLang
}
</script>


<template>
  <nav style="display:flex; gap:16px; padding:10px; font-size:20px">
    <RouterLink to="/">{{ $t('nav.profile') }}</RouterLink>
    <RouterLink to="/products">{{ $t('nav.products') }}</RouterLink>

    <select :value="locale" @change="changeLang">
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  </nav>

  <!-- 🔥 ВАЖЛИВО! Без цього сторінка пуста -->
  <RouterView />
</template>

<style>
a {
  text-decoration: none;
}
</style>
