<template>
  <div>
    <h2>Dashboard</h2>

    <div class="tabs">
      <button
        @click="activeTab = 'overview'"
        :class="{ active: activeTab === 'overview' }"
      >
        Overview
      </button>
      <button
        @click="activeTab = 'activity'"
        :class="{ active: activeTab === 'activity' }"
      >
        Activity
      </button>
    </div>

    <KeepAlive>
      <component :is="currentTabComponent" />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import OverviewTab from '@/views/admin/tabs/OverviewTab.vue'
import ActivityTab from '@/views/admin/tabs/ActivityTab.vue'

const activeTab = ref<'overview' | 'activity'>('overview')

// приклад даних для provide/inject
const usersCount = ref(10)
provide('usersCount', usersCount)

const currentTabComponent = computed(() => {
  return activeTab.value === 'overview' ? OverviewTab : ActivityTab
})
</script>

<style scoped>
.tabs {
  margin-bottom: 1rem;
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}

button.active {
  background: #0d6efd;
  color: #fff;
}
</style>
