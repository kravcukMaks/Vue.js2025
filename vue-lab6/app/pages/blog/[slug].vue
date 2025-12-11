<script setup>
const route = useRoute()

const { data: post, pending, error } = await useFetch(
  () => `/api/posts/${route.params.slug}`
)

useSeoMeta({
  title: () => `Стаття: ${route.params.slug}`,
  description: 'Детальна сторінка статті блогу',
})
</script>

<template>
  <UContainer>
    <div v-if="pending">Завантаження...</div>
    <div v-else-if="error">Статтю не знайдено</div>

    <article v-else>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </article>
  </UContainer>
</template>
