import { test, expect } from "@playwright/test"


test("Login test", async ({page}) => {

await page.goto('https://demo.suiteondemand.com/index.php?action=Login&module=Users');
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('will');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('will');
await page.getByRole('button', { name: 'Log In' }).click();
await expect(page.locator('h1')).toContainText('Welcome to the SuiteCRM 7 Demo');

})


