<template>
  <table class="report-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Report</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      <slot name="row" v-for="item in items" :item="item" :key="item.id" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  items: { id: number; title: string; status: string }[];
}>();
</script>

<style scoped>
.report-table {
  width: 100%;
  border-collapse: collapse;
}

.report-table td,
.report-table th {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
