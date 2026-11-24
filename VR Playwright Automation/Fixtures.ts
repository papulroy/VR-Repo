
import {test as base} from "@playwright/test"

type MyFixtures = {

    loginFixture: any
    pageFixture: any
}

export const test = base.extend<MyFixtures>({

    loginFixture: async ({}, use: any) => {

        // console.log("Before use steps")
        //   await use()
        // console.log("After use steps")

        const beforeUse = "Before use() steps"
        await use(beforeUse)
    },

    pageFixture: async ({loginFixture}: {loginFixture: any}, use: any) => {

        const VRpage =  loginFixture + ".Great page"
        await use(VRpage)
    }
});


    