import test from '@playwright/test'

test("Storage State", async({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(30000)
    // storage state - value in Json format    
    // // json -> key and value pair
    await page.context().storageState({path:'Data/SF_Login.json'})      
})