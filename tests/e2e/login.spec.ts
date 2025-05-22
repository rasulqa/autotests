import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

test.describe('Login feature', async () => {
    let loginPage: LoginPage

    test.beforeEach( async ({ page }) => {
        loginPage = new LoginPage(page)
    })

    test('successful login', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(page.getByText('Swag Labs')).toBeVisible()
    })

    test('authorization with an incorrect password', async ({ page }) => {
        await loginPage.login('standard_user', '*')
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    })

    test('getting data without authorization', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html')
        await expect(page.getByText("Epic sadface: You can only access '/inventory.html' when you are logged in.")).toBeVisible()
    })
})
