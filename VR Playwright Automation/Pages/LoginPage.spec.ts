import { Page } from "@playwright/test";
import { loginLocators } from "../Locators/LoginLocators.spec";


export class LoginPage
{
    constructor(private page: Page)
    {

    }
    async login(username: string, password : string)
    {
        await this.page.fill(loginLocators.usernameInput, username)
        await this.page.fill(loginLocators.passwordInput, password)
        await this.page.click(loginLocators.loginButton)

    }

}