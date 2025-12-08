<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Article } from '@/data/articles'

const props = defineProps<{
  article: Article
}>()
</script>

<template>
  <article :class="['card', $style.card]">
    <img
      :src="props.article.image"
      :alt="props.article.title"
      :class="$style.image"
    />

    <div :class="$style.body">
      <h3 :class="$style.title">{{ props.article.title }}</h3>
      <p>{{ props.article.summary }}</p>
      <p :class="$style.meta">{{ props.article.date }}</p>

      <RouterLink :to="`/article/${props.article.id}`">
        Read more
      </RouterLink>
    </div>
  </article>
</template>

<style module>
.card {
  border-radius: 12px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.body {
  padding: 12px 16px;
}

.title {
  font-size: 18px;
  margin: 0 0 8px;
}

.meta {
  font-size: 12px;
  opacity: 0.7;
}
</style>

