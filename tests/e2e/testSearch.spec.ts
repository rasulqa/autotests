import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

test.describe('LoginPage', async () => {
    let loginPage: LoginPage

    test.beforeEach( async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goto()
    })

    test('successful login', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(page.getByText('Swag Labs')).toBeVisible()
    })

    test('inncorrect login', async ({ page }) => {
        await loginPage.login('standard_user', '*')
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    })

    test('unautorization login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html')
        await expect(page.getByText("Epic sadface: You can only access '/inventory.html' when you are logged in.")).toBeVisible()
    })
})
