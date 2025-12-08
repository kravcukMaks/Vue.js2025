<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles } from '@/data/articles'

const route = useRoute()
const router = useRouter()

const article = computed(() => {
  const id = Number(route.params.id)
  return articles.find((a) => a.id === id)
})

if (!article.value) {
  router.replace({ name: 'notfound' })
}
</script>

<template>
  <section v-if="article" class="card">
    <img :src="article.image" alt="" style="width: 100%; border-radius: 12px 12px 0 0" />
    <div style="padding: 16px">
      <h1>{{ article.title }}</h1>
      <p style="opacity: 0.7; font-size: 14px">{{ article.date }}</p>
      <p style="margin-top: 16px">{{ article.content }}</p>
      <RouterLink to="/">← Назад до списку</RouterLink>
    </div>
  </section>
</template>
