import { type Locator, type Page } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly url: string

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('[data-test="username"]')
        this.passwordInput = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.url = 'https://www.saucedemo.com/'
    }

    async login(username: string, password: string) {
        await this.page.goto(this.url)
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
