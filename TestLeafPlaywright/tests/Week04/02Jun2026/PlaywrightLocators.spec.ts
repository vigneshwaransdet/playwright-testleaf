import test from "@playwright/test"

test("Locators", async({page}) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    await page.getByText("Admin Page").click()

    await page.waitForTimeout(3000)

    await page.getByTitle("ParaBank").click()

    // await page.getByTestId()

    await page.getByLabel("")
    
})


test.only("Locators find",async({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.getByLabel("Username").fill("Demosalesmanager")

    

})


