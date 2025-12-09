<template>
  <section id="pricing" class="p-6">
    <div class="w-8 m-auto text-center">
      <h2>Тарифи</h2>

      <div class="grid mt-5">
        <div
          class="col-12 md:col-4"
          v-for="plan in plans"
          :key="plan.name"
        >
          <Card>
            <template #title>{{ plan.name }}</template>
            <template #content>
              <p>{{ plan.desc }}</p>
              <p class="font-bold">{{ plan.price }}₴/міс.</p>
              <ul>
                <li v-for="f in plan.features" :key="f">{{ f }}</li>
              </ul>
              <Button class="mt-3" label="Обрати" />
            </template>
          </Card>
        </div>
      </div>

      <Divider />

      <!-- Mini calculator -->
      <div class="mt-5">
        <h3>Міні-калькулятор 💡</h3>

        <div class="flex gap-3 justify-content-center mt-3">
          <div class="w-3">
            <InputNumber v-model="users" placeholder="Користувачі" />
          </div>

          <div class="w-3">
            <InputNumber v-model="months" placeholder="Місяці" />
          </div>
        </div>

        <p class="mt-3 font-bold">
          Орієнтовна вартість:
          {{ total }} ₴
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "primevue/card"
import Button from "primevue/button"
import InputNumber from "primevue/inputnumber"
import Divider from "primevue/divider"
import { computed, ref } from "vue"

const users = ref(1)
const months = ref(1)
const basePrice = 99

const total = computed(() => users.value * months.value * basePrice)

const plans = [
  { name: "Basic", desc: "Для початківців", price: 99, features: ["5 проєктів", "До 5 користувачів"] },
  { name: "Team", desc: "Для команд", price: 199, features: ["50 проєктів", "До 20 користувачів"] },
  { name: "Pro", desc: "Для бізнесу", price: 499, features: ["∞ проєктів", "∞ користувачів"] }
]
</script>
