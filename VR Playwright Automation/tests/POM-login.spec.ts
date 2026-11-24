import {test , expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage.spec"
import { BASE_URL, USERNAME, PASSWORD } from "../Utils/envConfig.spec"

test('Login', async ({page}) => 
{
    const loginPage = new LoginPage(page)
await page.goto(BASE_URL)
await loginPage.login(USERNAME , PASSWORD)
await expect(page).toHaveURL('www.saucedemo.com/inventory.html')

})



