<template>
  <div>
    <UHeader class="p-4 bg-gray-100 flex gap-4">
      <ULink to="/">Головна</ULink>
      <ULink to="/blog">Блог</ULink>
      <ULink to="/about">Про автора</ULink>
    </UHeader>

    <main class="my-6">
      <NuxtPage />
    </main>

    <footer class="p-4 text-center text-gray-500">
      © 2025 Nuxt Course Blog
    </footer>
  </div>
</template>
