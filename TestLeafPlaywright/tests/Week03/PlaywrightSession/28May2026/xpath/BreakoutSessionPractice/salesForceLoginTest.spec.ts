import test from "@playwright/test"

test("Practice xpath",async({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("//input[contains(@class,'username')]").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("//input[contains(@class,'password')]").fill("TestLeaf@2025")

    await page.locator("//input[(contains(@class,'wide primary'))]").click()

})