import { type Page } from "@playwright/test"

export class CardPage {
    readonly page: Page
    readonly url: string
    readonly cardTitle: string
    readonly addtoCardButton: string
    readonly shopCardLink: string

    constructor(page: Page) {
        this.page = page
        this.url = 'https://www.saucedemo.com/inventory.html'
        this.cardTitle = '[data-test="item-4-title-link"]'
        this.addtoCardButton = '[data-test="add-to-cart"]'
        this.shopCardLink = '[data-test="shopping-cart-link"]'
    }

    async addToCard() {
        await this.page.goto(this.url)
        await this.page.locator(this.cardTitle).click()
        await this.page.locator(this.addtoCardButton).click()
        await this.page.locator(this.shopCardLink).click()
    }
}