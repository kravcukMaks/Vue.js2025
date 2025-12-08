<template>
  <div>
    <h3>Overview</h3>
    <p>Active users: {{ usersCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const usersCount = inject('usersCount', 0)
</script>


