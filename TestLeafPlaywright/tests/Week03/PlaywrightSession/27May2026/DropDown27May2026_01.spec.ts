import test from "@playwright/test"

test("Handle drop down with Select tag", async({page})=> {

    await page.goto("https://www.leafground.com/select.xhtml;")

    await page.selectOption(".ui-selectonemenu",{label:'Playwright'})

    await page.waitForTimeout(2000)

    await page.selectOption(".ui-selectonemenu",{index:3})

})

test("Handle DropDown without Select Tag", async({page})=> {
    
    await page.goto("https://www.leafground.com/select.xhtml;")

    await page.locator("[class='ui-selectonemenu-label ui-inputfield ui-corner-all']").first().click()

    await page.locator("li[class='ui-selectonemenu-item ui-selectonemenu-list ui-corner-all']").nth(2)

})

test.only("Handle DropDown with Select Tag", async({page})=> {
    
    await page.goto("https://www.telerik.com/contact")

    await page.selectOption("#Dropdown-1",{label:'Product questions'})
    
    await page.waitForTimeout(2000)

    await page.selectOption("#Dropdown-2",{value:'DevCraft'})  
    
    await page.waitForTimeout(2000)

    await page.selectOption("#Country-1",{value:'India'})

    await page.waitForTimeout(2000)

})