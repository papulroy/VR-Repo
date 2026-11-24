test('API test', async ({request}) =>{

    const getresponse = await request.get("/api/v1/accounts/9898")
    expect(getresponse).toBeOK
    console.log(getresponse.json())

    const postresponse = await request.post("api/v1/accounts/12345" , {data: {first: 'Vimal', last: 'Roy'}, })
         expect(postresponse.status()).toBe(201);
         expect(postresponse.statusText()).toBe('created');

})