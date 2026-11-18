import {test , expect} from "@playwright/test"

test("Edit account",async ({page}) =>{

// Login
await page.goto('https://demo.suiteondemand.com/index.php?action=Login&module=Users');
await page.getByRole('textbox', { name: 'Username' }).fill('will');
await page.getByRole('textbox', { name: 'Password' }).fill('will');
await page.getByRole('button', { name: 'Log In' }).click();
await expect(page.locator('h1')).toContainText('Welcome to the SuiteCRM 7 Demo');

// Step 1: open Accounts (Sales menu) -> select View Accounts
await page.getByRole('link', { name: 'Sales' }).filter({ visible: true }).first().hover();
await page.locator('#moduleTab_6_Accounts').filter({ visible: true }).first().click();
await page.getByRole('link', { name: 'View Accounts' }).filter({ visible: true }).first().click();
await expect(page).toHaveURL(/module=Accounts&action=index/);

// Step 2: select Filter -> verify Filter modal opens
await page.locator('.glyphicon-filter').first().click();
const filterModal = page.getByRole('dialog');
await expect(filterModal.getByRole('heading', { name: 'Filter' })).toBeVisible();

// Step 3: enter Name = Vimal Roy -> Search
await filterModal.getByRole('textbox', { name: 'Name' }).fill('Vimal Roy');
await filterModal.getByRole('button', { name: 'Search' }).click();

// Step 4: verify search returns the correct account
const row = page.locator('table.list tbody tr').filter({ hasText: 'Vimal Roy' }).filter({ hasText: 'papulroy@gmail.com' }).first();
await expect(row).toBeVisible();
await expect(row.getByRole('link', { name: 'Vimal Roy' })).toBeVisible();

// Step 5: select Edit -> verify correct account opens
await row.locator('a.edit-link').click();
await expect(page).toHaveURL(/module=Accounts&action=EditView/);
await expect(page.locator('#name')).toHaveValue('Vimal Roy');

// Step 6: verify each field and its value
await expect(page.locator('#Accounts0emailAddress0')).toHaveValue('papulroy@gmail.com');
await expect(page.locator('#billing_address_street')).toHaveValue('B25');
await expect(page.locator('#billing_address_city')).toHaveValue('Pune');
await expect(page.locator('#billing_address_state')).toHaveValue('Maharashtra');
await expect(page.locator('#billing_address_postalcode')).toHaveValue('422026');
await expect(page.locator('#description')).toHaveValue('This is test VR.');

// Step 7: edit city Pune -> Mumbai, save, verify
await page.locator('#billing_address_city').fill('Mumbai');
await page.locator('#SAVE').first().click();
await expect(page).toHaveURL(/action=DetailView.*module=Accounts.*record=/);
await expect(page.locator('[field="name"]')).toContainText('Vimal Roy');
await expect(page.locator('[field="billing_address_street"]')).toContainText('Mumbai');

})
