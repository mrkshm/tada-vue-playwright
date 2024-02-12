<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
const todoStore = useTodosStore()
const route = useRoute()
const router = useRouter()
const dongus = computed(() => route.params.tadaId)
const tadaItem = todoStore.getTodo(Number(dongus.value))
console.log('hello from', dongus.value, tadaItem?.text)
const todoRef = ref(tadaItem?.text || '')
const updateTada = () => {
  todoStore.updateTodo({ id: Number(dongus.value), text: todoRef.value })
  router.push('/')
}
</script>
<template>
  <main class="p-8">
    <h1 class="text-white text-3xl">Edit your Tada</h1>
    <input @keyup.enter="updateTada" class="text-black" v-model="todoRef" />
  </main>
</template>
