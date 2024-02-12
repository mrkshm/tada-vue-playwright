<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const newTodoText = ref('')
const todoStore = useTodosStore()
const addTodo = () => {
  todoStore.addTodo(newTodoText.value)
  newTodoText.value = ''
}
</script>
<template>
  <main class="p-8">
    <h1 class="text-3xl pb-4">This is the main page, list goes here</h1>
    <input
      class="text-black"
      placeholder="Write a new todo"
      v-model="newTodoText"
      @keyup.enter="addTodo"
    />
    <ul>
      <li class="pt-2 space-x-4" v-for="todo in todoStore.todos" :key="todo.id">
        <RouterLink :to="`/edit/${todo.id}`">{{ todo.text }}</RouterLink>
        <input type="checkbox" v-model="todo.done" />
        <button @click="todoStore.removeTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </main>
</template>
