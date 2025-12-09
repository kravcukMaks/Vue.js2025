<template>
  <section class="p-6 surface-100" id="how">
    <div class="w-8 m-auto text-center">
      <h2>Як це працює?</h2>

      <div class="steps grid mt-5">
        <div class="col-12 md:col-4" v-for="s in steps" :key="s.num">
          <div class="step-box">
            <span class="number">{{ s.num }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { num: 1, title: "Створюй задачі", text: "Додавай що робити і дедлайни" },
  { num: 2, title: "Призначай виконавців", text: "Працюйте командою" },
  { num: 3, title: "Контролюй прогрес", text: "Все під рукою в одній системі" }
]
</script>

<style scoped>
.number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
}
</style>
