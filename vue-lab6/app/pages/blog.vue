<script setup>
const { data: posts, pending, error } = await useFetch('/api/posts')

useSeoMeta({
  title: 'Blog | Nuxt Course',
  description: 'Список статей блогу',
})
</script>

<template>
  <UContainer>
    <h1>Список статей</h1>

    <div v-if="pending">Завантаження...</div>
    <div v-else-if="error">Сталася помилка</div>

    <ul v-else>
      <li v-for="post in posts" :key="post.slug">
        <ULink :to="'/blog/' + post.slug">{{ post.title }}</ULink>
      </li>
    </ul>
  </UContainer>
</template>