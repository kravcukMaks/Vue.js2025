<template>
  <section class="p-6" id="benefits">
    <div class="w-8 m-auto text-center">
      <h2>Переваги</h2>
      <p>Чому TaskFlow допоможе саме вам</p>

      <div class="grid mt-5">
        <div class="col-12 md:col-4" v-for="b in benefits" :key="b.title">
          <Card>
            <template #title>{{ b.title }}</template>
            <template #content>{{ b.text }}</template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "primevue/card"

const benefits = [
  { title: "Просте управління", text: "Створюй задачі в 1 клік" },
  { title: "Командна робота", text: "Синхронізація в реальному часі" },
  { title: "Повний контроль", text: "Аналітика → рішення → результат" }
]
</script>
