import { test, expect } from '@playwright/test'

test('api test', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
  expect(response.ok()).toBeTruthy()
  const data = await response.json()
  expect(data.id).toBe(1)
  expect(data).toHaveProperty('title')

})