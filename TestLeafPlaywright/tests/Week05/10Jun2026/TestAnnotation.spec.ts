import test, { expect } from '@playwright/test'

test("Test Method", async({page}) => {
    
    await page.goto("https://www.amazon.com")
    const title = await page.title()
    console.log(title)
})

// test.only("Test Only", async({page}) => {
    
//     await page.goto("https://login.salesforce.com/?locale=in")
//     const title = await page.title()
//     console.log(title)
// })

test.skip("Page Fixture",async({page}) => {
    await page.goto("https://www.facebook.com")
})

test.fail("Non Retry Assertions", async({page}) => {

    test.info().annotations.push({type:'author', description:'Vignesh'},
        {type:'smoke testing',description:'check login function'})

    await page.goto("https://www.leafground.com/input.xhtml")
    // await page.waitForTimeout(2000)
    const title = await page.title()
    // await page.waitForTimeout(2000)
    console.log(title)
    // await page.waitForTimeout(2000)    
    expect(title).toBe("Input Components")
    // await page.waitForTimeout(2000)
    console.log("After Assertion")
})

test.fixme("test fixme", async({page}) => {

    await page.goto("https://www.leafground.com/input.xhtml")
    // await page.waitForTimeout(2000)
    const title = await page.title()
    // await page.waitForTimeout(2000)
    console.log(title)
    // await page.waitForTimeout(2000)    
    expect(title).toBe("Input Components")
    // await page.waitForTimeout(2000)
    console.log("After Assertion")
})
