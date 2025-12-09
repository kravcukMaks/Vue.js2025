<template>
  <section class="p-6" id="faq">
    <div class="w-8 m-auto text-center">
      <h2>FAQ</h2>

      <Accordion>
        <AccordionTab v-for="(q, i) in faq" :key="i" :header="q.q">
          {{ q.a }}
        </AccordionTab>
      </Accordion>

    </div>
  </section>
</template>

<script setup lang="ts">
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"

const faq = [
  { q: "Чи є безкоштовна версія?", a: "Так, тариф Basic доступний безкоштовно" },
  { q: "Чи можна запросити команду?", a: "Так, створюйте групи та працюйте разом" },
  { q: "Дані захищені?", a: "Так, ваші дані зберігаються у хмарі шифровано" }
]
</script>
