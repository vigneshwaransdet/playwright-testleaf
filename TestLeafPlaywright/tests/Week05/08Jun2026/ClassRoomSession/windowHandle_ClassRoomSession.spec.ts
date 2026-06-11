/*
ClassRoom:
load url: https://www.leafground.com/window.xhtml
click on Open button
Handle window(create promise, do the action , resolve)
Enter Mail id 
come back to parent page without closing the child page
click on Open Multiple button
*/

import test from "@playwright/test"

test("Handle Window without closing child window", async({page, context}) => {

    await page.goto("https://www.leafground.com/window.xhtml")

    //Step 1: create promise
    const parentWindow = context.waitForEvent("page")

    //step 2: do the action
    await page.locator("//span[text()='Open']").click()

    //step 3: resolve the promise
    const childWindow = await parentWindow    

    const chTitle = await childWindow.title()    

    console.log(chTitle)      

    //step 4: do the action
    await childWindow.locator("//input[@id='email']").fill("vigneshwaransdet@gmail.com")

    await childWindow.locator("//textarea[@id='message']").fill("Hi this is sample message")

    
    //Instead of closing child window, we can switch to parent window
    await page.bringToFront()   
    
    await page.locator("//span[text()='Open Multiple']").click()
})