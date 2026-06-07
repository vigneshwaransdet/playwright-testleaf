import test from "@playwright/test"

test("Handle frame with index value", async({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml")

    const frameValue = page.frames()

    console.log("Total frames in the page: "+frameValue.length)

    //playwright main page consider as one frame
    //index value start with 0
    //main page -> index value -> 0
    //first frame -> index value -> 1
    //second frame -> index value -> 2
    // await page.locator("#Click").click()//This won't work, below line will work
    await frameValue[1].locator("#Click").click()

    await page.locator("[class='pi pi-globe layout-menuitem-icon']").click()

    await frameValue[4].locator("#Click").click()
})

test.only("Handle frame with Frame Locator", async({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml")

    await page.waitForTimeout(2000)

    await page.frameLocator("(//iframe)[1]").locator("#Click").click()

    await page.waitForTimeout(2000)

    //nested frame -> page.frameLocator(outer frame).frameLocator(inner frame).locator().click()

    await page.frameLocator("(//iframe)[3]").frameLocator("(//iframe)[1]").locator("#Click").click()//Need to check    

    // await page.frameLocator("iframe[src='page.xhtml']").frameLocator("#frame2").locator("#Click").click()
    
})

//Frame Object
// test.only("Handle frame with Frame Object", async({page}) => {

//     await page.goto("https://www.leafground.com/frame.xhtml")

//     await page.waitForTimeout(2000)

//     await page.frameLocator("(//iframe)[1]").locator("#Click").click()    

//     await page.waitForTimeout(2000)

//     await page.frame({url:'https://www.leafground.com/default.xhtml'})?.locator("#Click").click()

//     await page.frame({name:'frame2'})?.locator("#Click").click()

// })