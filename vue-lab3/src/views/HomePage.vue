<script setup lang="ts">
import { ref } from 'vue'
import { articles } from '@/data/articles'
import NewsCard from '@/components/news/NewsCard.vue'
import AdSlot from '@/components/ads/AdSlot.vue'
import AdModal from '@/components/ads/AdModal.vue'

const showAd = ref(false)
</script>

<template>
  <section>
    <h1>Новини</h1>

    <AdSlot @open-ad="showAd = true" />

    <div class="grid">
      <NewsCard v-for="a in articles" :key="a.id" :article="a" />
    </div>

    <AdModal v-if="showAd" @close="showAd = false" />
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
</style>
