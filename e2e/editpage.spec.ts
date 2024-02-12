import { test, expect } from '@playwright/test'

test('Todo navigation and edit functionality', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.click('ul li:first-child a')

  await expect(page.url()).toMatch(/\/edit\/1$/)
  const inputLocator = page.locator('input')
  await expect(inputLocator).toBeVisible()
  await expect(inputLocator).toHaveValue('Learn Vue 3 Composition API')
})
