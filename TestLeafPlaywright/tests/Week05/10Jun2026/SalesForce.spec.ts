import test from '@playwright/test'

test.use({storageState:"Data/SF_Login.json"})

test("Use Staorage State",async({page}) => {
    await page.waitForTimeout(3000)
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await page.waitForTimeout(3000)
    await page.locator("//div[@class='slds-icon-waffle']").click()
})