import {test,} from "@playwright/test"

test("basic start with Playwright",()=>{

    console.log("My 1st test script")
})

test("My 2nd test case", ()=>{

    console.log("My 2nd test script")
})


test("My third test",({page})=>{

})

