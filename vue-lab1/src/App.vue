<script setup>
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="container">
    <h1>Vue ToDo App</h1>
    <TodoList />
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>
