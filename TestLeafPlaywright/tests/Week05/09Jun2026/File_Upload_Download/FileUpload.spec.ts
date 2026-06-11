/*

*/

import test from '@playwright/test'

test("Upload the File with TagName Input", async({page}) => {

    await page.goto("https://www.leafground.com/file.xhtml")

    await page.locator("//input[@type='file']").first().setInputFiles('./TestData/String-HomeAssignment.pdf')
    // OR use below
    // This below also we can use, if the path is not complicated
    // await page.locator("//input[@type='file']").first().setInputFiles('TestData/String-HomeAssignment.pdf')
})

/*
In some cases, tag named input, type = file is not present in the DOM
we need to use event listener
*/

test.only("Upload the file with Event Listener",async({page}) => {

    await page.goto("https://www.leafground.com/file.xhtml")

    //create the promise
    const uploadFile = page.waitForEvent('filechooser')

    //do the action
    await page.locator("//input[@type='file']").first().click()

    //resolve the promise
    const file = await uploadFile

    await file.setFiles("./TestData/String-HomeAssignment.pdf")
})

/*
If any multiple file need to upload, we need to use the below one, yet to share by Dilip
*/

    test.only("Upload the Multiple File with TagName Input",async({page})=> {
        await page.goto("https://www.leafground.com/file.xhtml")
        await page.locator("//input[@type='file']").nth(1).setInputFiles(['TestData/TestLeaf Logo.png','TestData/TestLeaf Logo (4).png'])
        await page.waitForTimeout(2000)
    })
