import { test, expect } from '@playwright/test'


test.describe('/posts', () => {

    test('get post', async ({ request }) => {

        const response = await request.get('/posts/1')

        expect(response.status()).toBe(200)
        const data = await response.json()
        expect(data.id).toBe(1)
        expect(data).toHaveProperty('title')

    })

    test('create post', async ({ request }) => {

        const response = await request.post('/posts', {
            data: {
                title: 'test',
                body: 'fortest',
                userId: 1,
            }
        })

        expect(response.status()).toBe(201)
        const data = await response.json()
        expect(data).toHaveProperty('id')
        expect(data.title).toBe('test')
        expect(data.body).toBe('fortest')
        expect(data.userId).toBe(1)
    })


    test('update post', async ({ request }) => {

        const response = await request.put('/posts/1', {
            data: {
                title: 'test upd',
                body: 'fortest upd',
                userId: 2,
            }
        })

        expect(response.status()).toBe(200)
        const data = await response.json()
        expect(data).toHaveProperty('id')
        expect(data.title).toBe('test upd')
        expect(data.body).toBe('fortest upd')
        expect(data.userId).toBe(2)
    })

    test('delete post', async ({ request }) => {

        const response = await request.delete('/posts/1')

        expect(response.status()).toBe(200)
        const data = await response.json()
        expect(data).toEqual({})
    })
})



