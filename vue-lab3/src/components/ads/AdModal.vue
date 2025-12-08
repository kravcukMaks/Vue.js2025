<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="route-fade">
      <div class="backdrop" @click.self="emit('close')">
        <div class="modal card">
          <h3>Реклама</h3>
          <p>Тут могла б бути ваша реклама 🙂</p>
          <button type="button" @click="emit('close')">Закрити</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  max-width: 400px;
}
</style>
