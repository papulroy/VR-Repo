import {expect , Browser, request } from "@playwright/test"
import {test} from "../Fixtures"


test("Login test", async ({page}) => {

await page.goto('https://demo.suiteondemand.com/index.php?action=Login&module=Users');

await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('will');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('will');
await page.getByRole('button', { name: 'Log In' }).click();
await expect(page.locator('h1')).toContainText('Welcome to the SuiteCRM 7 Demo');
page.close()

})

// TEST learning



test('auto wait assertion ', async({page, pageFixture})=>{
    page.goto('https://www.google.com/?gws_rd=ssl')
    expect (page.locator('First')).toBeVisible()
    page.getByRole('button', {name: 'Feeling lucky'}).click()
    expect (page.getByText('google')).toBeVisible()
})

    


