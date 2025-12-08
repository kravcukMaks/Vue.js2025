<template>
  <div>
    <h2>Welcome!</h2>
    <p>Головна сторінка</p>

    <router-link to="/login">
      <button>Перейти до авторизації</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
button {
  margin-top: 15px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
