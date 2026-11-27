
import {test ,expect} from "@playwright/test"

test('API test', async ({page, request}) =>{

    const getresponse = await request.get("/api/v1/accounts/9898")
    expect(getresponse).toBeOK
    console.log(getresponse.json())

    const postresponse = await request.post("api/v1/accounts/12345" , {data: {first: 'Vimal', last: 'Roy'}, })
         expect(postresponse.status()).toBe(201);
         expect(postresponse.statusText()).toBe('created');
         expect(postresponse.json()).toBeTruthy;

})