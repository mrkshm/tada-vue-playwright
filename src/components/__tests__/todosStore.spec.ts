import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTodosStore } from '@/stores/todos'

describe('todosStore', () => {
  beforeEach(() => {
    // Reset Pinia state before each test
    setActivePinia(createPinia())
  })

  it('adds a new todo', () => {
    const todoStore = useTodosStore()
    expect(todoStore.todos.length).toBe(3)

    // Call the addTodo action
    todoStore.addTodo('New Todo')

    // Check if the todo was added
    expect(todoStore.todos.length).toBe(4)
    expect(todoStore.todos[3].text).toBe('New Todo')
    expect(todoStore.todos[3].done).toBe(false)
  })

  it('selects a todo', () => {
    const todoStore = useTodosStore()

    expect(todoStore.todos.length).toBe(3)

    const checkTodo = todoStore.getTodo(1)
    expect(checkTodo?.text).toBe('Learn Vue 3 Composition API')
  })

  it('deletes a todo', () => {
    const todoStore = useTodosStore()
    expect(todoStore.todos.length).toBe(3)
    todoStore.removeTodo(1)
    expect(todoStore.todos.length).toBe(2)
  })
})
