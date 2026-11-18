import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
})

test('test2', async ({ page }) => {

await page.goto('https://playwright.dev/');
await page.getByRole('button', { name: 'Search (Control+k)' }).click();
await page.getByRole('searchbox', { name: 'Search' }).click();

})
