
import {test , expect} from "@playwright/test"

test("Add account",async ({page}) =>{

await page.goto('https://demo.suiteondemand.com/index.php?action=Login&module=Users');
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('will');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('will');
await page.getByRole('button', { name: 'Log In' }).click();
await expect(page.locator('h1')).toContainText('Welcome to the SuiteCRM 7 Demo');

// Step 1: hover Create -> Create Account -> verify form opens
await page.locator('#quickcreatetop:visible').first().hover();
await page.getByRole('link', { name: 'Create Accounts' }).filter({ visible: true }).first().click();
await expect(page).toHaveURL(/module=Accounts&action=EditView/);
await expect(page.locator('#name')).toBeVisible();

// Step 2: fill fields
await page.locator('#name').fill('Vimal Roy');
await page.locator('#Accounts0emailAddress0').fill('papulroy@gmail.com');
await page.locator('#billing_address_street').fill('B25');
await page.locator('#billing_address_city').fill('Pune');
await page.locator('#billing_address_state').fill('Maharashtra');
await page.locator('#billing_address_postalcode').fill('422026');
await page.locator('#description').fill('This is test VR.');

// Step 3: save
await page.locator('#SAVE').first().click();
// Demo data persists between runs: if duplicate account detected, continue with create
if (/action=ShowDuplicates/.test(page.url())) {
  await page.getByRole('button', { name: 'Save' }).first().click();
}

// Step 4: verify saved (SuiteCRM 7 redirects to DetailView, no toast)
await expect(page).toHaveURL(/action=DetailView.*module=Accounts.*record=/);
await expect(page.locator('.moduleTitle h2')).toContainText('Vimal Roy');

// Verify each saved field value on the DetailView
await expect(page.locator('[field="name"]')).toContainText('Vimal Roy');
await expect(page.locator('[field="email1"]')).toContainText('papulroy@gmail.com');
// Billing address is rendered as one combined field: street, city, state, postal
const billing = page.locator('[field="billing_address_street"]');
await expect(billing).toContainText('B25');
await expect(billing).toContainText('Pune');
await expect(billing).toContainText('Maharashtra');
await expect(billing).toContainText('422026');
await expect(page.locator('[field="description"]')).toContainText('This is test VR.');
console.log("2nd git push")
}) 
