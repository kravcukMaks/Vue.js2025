<template>
  <div>
    <h2>Reports</h2>

    <ReportList :items="reports">
      <template #row="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </template>
    </ReportList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReportList from '@/views/admin/tabs/ReportList.vue'

const reports = ref([
  { id: 1, title: 'Revenue Report', status: 'Done' },
  { id: 2, title: 'Usage Report', status: 'In progress' }
])
</script>
