import test from "@playwright/test"

test("Handle Native Locators", async({page}) => {    
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    await page.getByText("Admin Page").click() 
    // await page.waitForTimeout(2000)

    // await page.getByRole('textbox',{name:'username'}).fill("Test")//not working

    // await page.getByRole('textbox',{name:'soapEndpoint'}).fill("Test")//not working
    // await page.waitForTimeout(2000)

    await page.getByAltText("ParaBank").click()

    await page.getByRole('link',{name:"Forgot login info?"}).click()    

})