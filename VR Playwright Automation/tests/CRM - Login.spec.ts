import { test, expect , Browser, request } from "@playwright/test"


test("Login test", async ({page}) => {

await page.goto('https://demo.suiteondemand.com/index.php?action=Login&module=Users');

await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('will');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('will');
await page.getByRole('button', { name: 'Log In' }).click();
await expect(page.locator('h1')).toContainText('Welcome to the SuiteCRM 7 Demo');
})

// TEST learning

test('New tab', async ({page , context, request}) =>{

    const pagePromise = await context.waitForEvent('page')
    await page.locator('!newtab').click()
    const newPage = pagePromise
    newPage.waitForLoadState()
})


test('auto wait assertion ', async({page})=>{
    page.goto('https://www.google.com/?gws_rd=ssl')
    expect (page.locator('First')).toBeVisible()
    page.getByRole('button', {name: 'Feeling lucky'}).click()
    expect (page.getByText('google')).toBeVisible()
})


test('Context test', async({context})=>{

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    page1.goto ('https://www.google.com/?gws_rd=ssl')
    page2.goto ('https://mail.google.com/mail/u/0/')

    const cookies = await context.cookies()
    console.log(cookies)

    context.addCookies ([{name: 'myCooky', value: '123' , url: 'https://mail.google.com/mail/u/0/'}])
})

test('API test', async ({request}) =>{

    const getresponse = await request.get("/api/v1/accounts/9898")
    expect(getresponse).toBeOK
    console.log(getresponse.json())

    const postresponse = await request.post("api/v1/accounts/12345" , {data: {first: 'Vimal', last: 'Roy'}, })
         expect(postresponse.status()).toBe(201);
         expect(postresponse.statusText()).toBe('created');

})

