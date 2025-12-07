<script setup>
import { ref, computed, watch } from 'vue'

const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || [])

const newTitle = ref('')
const newPriority = ref('low')
const filter = ref('all')

function addTask() {
  if (!newTitle.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTitle.value.trim(),
    done: false,
    priority: newPriority.value,
    createdAt: new Date().toLocaleString(),
    editing: false
  })
  newTitle.value = ''
  newPriority.value = 'low'
}

function toggleStatus(task) {
  task.done = !task.done
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

function startEdit(task) {
  task.editing = true
}

function finishEdit(task) {
  task.editing = false
}

const filteredTasks = computed(() => {
  if (filter.value === 'active') return tasks.value.filter(t => !t.done)
  if (filter.value === 'done') return tasks.value.filter(t => t.done)
  return tasks.value
})

const activeCount = computed(() =>
  tasks.value.filter(t => !t.done).length
)

watch(tasks, () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}, { deep: true })
</script>

<template>
  <div class="todo">
    <h2>ToDo List</h2>

    <div class="input-row">
      <input v-model="newTitle" placeholder="Назва задачі" @keyup.enter="addTask" />
      <select v-model="newPriority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button @click="addTask">Додати</button>
    </div>

    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">Всі</button>
      <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Активні</button>
      <button :class="{ active: filter === 'done' }" @click="filter = 'done'">Виконані</button>
    </div>

    <p class="count">Активних задач: {{ activeCount }}</p>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id" :class="{ done: task.done }">
        <input type="checkbox" v-model="task.done" />

        <template v-if="!task.editing">
          <span>{{ task.title }}</span>
          <span class="priority" :class="task.priority">{{ task.priority }}</span>
          <small class="date">{{ task.createdAt }}</small>
          <button class="edit-btn" @click="startEdit(task)">✏</button>
        </template>

        <template v-else>
          <input v-model="task.title" @keyup.enter="finishEdit(task)" class="edit-input" />
          <button class="save-btn" @click="finishEdit(task)">✔</button>
        </template>

        <button class="delete-btn" @click="deleteTask(task.id)">✕</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo {
  text-align: center;
}

.input-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f8f8f8;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.done span {
  text-decoration: line-through;
  color: gray;
}

.filters button {
  margin: 0 4px;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
}

.filters .active {
  background-color: #42b883;
  color: #fff;
}

.priority {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  text-transform: capitalize;
}

.priority.low {
  background-color: #9bd89b;
}
.priority.medium {
  background-color: #f2d47c;
}
.priority.high {
  background-color: #e78b8b;
}

.date {
  font-size: 10px;
  color: #777;
}

.delete-btn {
  color: red;
  cursor: pointer;
}

.edit-btn {
  cursor: pointer;
}

.edit-input {
  width: 150px;
}

.count {
  font-weight: bold;
}
</style>
