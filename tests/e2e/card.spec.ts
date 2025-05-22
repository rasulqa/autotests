import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { CardPage } from '../../pages/CardPage'

test.describe('Catd feature', async () => {
    let loginPage: LoginPage
    let cardPage: CardPage

    test.beforeEach( async ({ page }) => {
        loginPage = new LoginPage(page)
        cardPage = new CardPage(page)
    })

    test('adding product to cart', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce')
        await cardPage.addToCard()

        await page.waitForURL('https://www.saucedemo.com/cart.html')
        await expect(page.locator(cardPage.cardTitle)).toHaveText('Sauce Labs Backpack')
    })
})
