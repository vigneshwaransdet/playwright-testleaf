import test from "@playwright/test"


test("Handle Window", async({page, context}) => {

    await page.goto("https://www.amazon.in/")
    const searchBox =  await page.locator("#twotabsearchtextbox")
    await searchBox.fill("Phone")
    await searchBox.press('Enter')

    //Step 1: create promise
    const parentWindow = context.waitForEvent("page")

    //step 2: do the action
    await page.locator("//span[contains(text(),'REDMI A7 Pro 5G')]").first().click()

    //step 3: resolve the promise
    const childWindow = await parentWindow

    await page.waitForTimeout(2000)

    const chTitle = await childWindow.title()

    await childWindow.waitForTimeout(2000)

    console.log(chTitle)

    await childWindow.waitForTimeout(2000)

    const price = await page.locator("//span[@class='a-price-whole']").nth(5).innerText()

    await childWindow.waitForTimeout(2000)

    console.log(price)

    await childWindow.waitForTimeout(5000)

    await childWindow.close()

    await page.waitForTimeout(2000)

    await page.locator("//a[text()='Sell']").click()

    await page.waitForTimeout(2000)
})


