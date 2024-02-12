import { defineStore } from 'pinia'

interface Todo {
  id: number
  text: string
  done: boolean
}

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      { id: 1, text: 'Learn Vue 3 Composition API', done: false },
      { id: 2, text: 'Build a todo app with Pinia', done: true },
      { id: 3, text: 'Explore Vue Router for SPA navigation', done: false }
    ] as Todo[]
  }),
  actions: {
    addTodo(text: string) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        done: false
      }
      this.todos.push(newTodo)
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    updateTodo({ id, text }: { id: number; text: string }) {
      const todo = this.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.text = text
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  },
  getters: {
    getTodo: (state) => {
      return (id: number) => state.todos.find((todo) => todo.id === id)
    }
  }
})
