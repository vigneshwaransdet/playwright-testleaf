import test from "@playwright/test"

test("TestLeaf Login Page", async({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("democsr")

    await page.locator("#password").fill("crmsfa")

    await page.locator(".decorativeSubmit").click()

    await page.locator(`text='CRM/SFA'`).click()    
    
    console.log(await page.title())   
})