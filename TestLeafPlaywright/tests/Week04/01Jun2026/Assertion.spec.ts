import test, { expect } from "@playwright/test"

// test("Auto Retry Assertions", async({page}) => {
    
//     await page.goto("https://www.leafground.com/input.xhtml")

//     const enable = page.locator("//input[@placehlder = 'Babu Manickam']")
//     Hard Assert - If the condition is failed, it will not go to next line of code
//     //It will wait for 5 secs by default
//     await expect(enable).toBeDisabled()

//     console.log("After Assertion")

// })


// test("Auto Retry Assertions", async({page}) => {
    
//     await page.goto("https://www.leafground.com/input.xhtml")

//     const enable = page.locator("//input[@placehlder = 'Babu Manickam']")

//     //This is override the default wait 5 secs to 10 secs
//     await expect(enable).toBeDisabled({timeout:10000})

//     console.log("After Assertion")

// })


// test("Auto Retry Assertions", async({page}) => {
    
//     await page.goto("https://www.leafground.com/input.xhtml")

//     const enable = page.locator("//input[@placehlder = 'Babu Manickam']")

// //  Soft Assert - If the condition is failed, it will go to next line of code
//     await expect.soft(enable).toBeDisabled()

//     console.log("After Assertion")

// })


test("Non Retry Assertions", async({page}) => {

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