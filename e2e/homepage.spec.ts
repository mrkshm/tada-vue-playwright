import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  // await page.goto('/')
  await page.goto('http://localhost:5173/')
  await expect(page.locator('h1')).toHaveText('This is the main page, list goes here')
})
