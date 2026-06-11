import test from '@playwright/test'

test("File Upload in Naukri Profile", async({page}) => {

    await page.goto("https://www.naukri.com/registration/createAccount")    

    await page.locator("//div[@class='textWrap']").first().click()

    await page.waitForTimeout(2000)

    await page.locator("//input[@type='file']").first().setInputFiles('./TestData/String-HomeAssignment.pdf')

    await page.waitForTimeout(2000)
})