<template>
  <div class="public-layout">
    <slot />
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.public-layout {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  text-align: center;
}
</style>

