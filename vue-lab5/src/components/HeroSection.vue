<template>
  <section id="hero" class="hero">
    <div class="content">
      <h1>TaskFlow — керуй задачами з розумом 👨‍💻</h1>
      <p>Трекер задач для команд і професіоналів</p>

      <Button label="Спробуй безкоштовно" icon="pi pi-check" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "primevue/button"
</script>

<style scoped>
.hero {
  padding: 120px 0;
  text-align: center;
}
.content h1 {
  font-size: 40px;
  font-weight: 800;
}
</style>
