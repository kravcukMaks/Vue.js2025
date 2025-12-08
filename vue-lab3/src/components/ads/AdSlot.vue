<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open-ad'): void
}>()
</script>

<template>
  <div class="ad-slot card">
    <p>Рекламний банер</p>
    <button type="button" @click="emit('open-ad')">Показати рекламу</button>
  </div>
</template>

<style scoped>
.ad-slot {
  margin: 16px 0;
  text-align: center;
}
</style>
