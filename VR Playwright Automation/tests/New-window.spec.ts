import {test, expect} from "@playwright/test"


test('New tab', async ({page , context}) =>{

    const pagePromise = page.waitForEvent('popup')
    await page.locator('!newtab').click()
    const newPage = await pagePromise
    newPage.waitForLoadState()
    await expect(newPage).toHaveURL(/sample/)
})
 
test('New window', async ({page , context}) =>{

    const windowPromise = context.waitForEvent('page')
    await page.locator('!newwindow').click()
    const newWindow = await windowPromise
    newWindow.waitForLoadState()
    await expect(newWindow).toHaveURL(/sample/)
})

test('New tab (same context)', async({context})=>{

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto ('https://www.google.com/?gws_rd=ssl')
    await page2.goto ('https://mail.google.com/mail/u/0/')

    const cookies = await context.cookies()
    console.log(cookies)
})
    
test("new tab (diff context)", async ({page, browser}) =>{

    const context1 = await browser.newContext()
    const context2 = await browser.newContext()
    
    
    const page1 = await context1.newPage()
    const page2 = await context2.newPage()

    await page1.goto ("https://www.google.com/?gws_rd=ssl")
    await page2.goto ("https://mail.google.com/mail/u/0/")

    await context1.close()
    await context2.close()

})