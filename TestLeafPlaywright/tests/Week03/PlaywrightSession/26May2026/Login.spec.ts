import test from "@playwright/test"

test("Salesforce Login Page", async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilpkumar.rajendran@testleaf.com")
    await page.locator("[name='pw']").fill("TestLeaf@2025")
    await page.locator(".button.r4.wide.primary").click()
    //wait for sometime
    await page.waitForTimeout(12000)    
    console.log(await page.title())    
})