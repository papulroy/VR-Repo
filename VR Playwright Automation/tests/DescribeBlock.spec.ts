import {test , expect, Page} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage.spec"
import { BASE_URL, USERNAME, PASSWORD } from "../Utils/envConfig.spec"

async function login(page : Page)
{

await page.goto("https://www.saucedemo.com");
await page.locator("#user-name").fill("standard-user")
await page.locator("password").fill("secret_sauce")
await page.locator("#login-button").click()
expect(page).toHaveTitle("Products")
}



test.describe("Login Functionality", ()=>
{

test('Login With Valid Credential', async ({page}) =>
{
    await login(page);

// await page.goto("https://www.saucedemo.com");
// await page.locator("#user-name").fill("standard-user")
// await page.locator("password").fill("secret_sauce")
// await page.locator("#login-button").click()
// await page.waitForSelector(".title")
await expect(page.locator(".title")).toHaveText("Products")

})

test('Login With Invalid Credential', async ({page}) => {
    
await page.goto("https://www.saucedemo.com");
await page.locator("#user-name").fill("standard-user1")
await page.locator("password").fill("secret_sauce")
await page.locator("#login-button").click()
expect(page).toHaveTitle("Products")
expect(page.locator ("h3[data-test='error']")).toContainText("do not match")


})
})