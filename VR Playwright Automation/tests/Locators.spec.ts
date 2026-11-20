import {test, expect} from "@playwright/test"


test('Locators practice - getByRole', async ({page , context}) =>{

    await page.goto('amazon.in')
    await page.waitForEvent
    await expect(page).toHaveURL('amazon')
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop')
    await page.getByRole('button', {name: 'Go', exact: true}).click()

})

test('getByText', async ({page}) => {

    await page.goto('amazon.in')
    await page.waitForEvent
    await expect(page).toHaveURL('amazon')
    await page.getByText("customer service").click()
   
    })

test('getByLabel', async ({page }) => {

    await page.goto('amazon.in')
    await page.waitForEvent
    await expect(page).toHaveURL('amazon')
    const labelName = await page.getByLabel("name:")
    await expect(labelName).toBeVisible()

})

test('getByAltText', async ({page }) => {

    await page.goto('amazon.in')
    await expect(page).toHaveURL('amazon')
    await page.getByAltText('kilos').click()
   
    
})