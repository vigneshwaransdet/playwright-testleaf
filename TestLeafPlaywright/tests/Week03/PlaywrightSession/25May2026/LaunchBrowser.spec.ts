import test, { chromium } from "@playwright/test"

test("Launch Browser", async()=> {
    //To Launch the Browser
    //By default it will launch the browser in headless mode
    const browser = await chromium.launch({headless:false})
    
    //to open the window
    const contect = await browser.newContext()

    //to open the page
    const page = await browser.newPage()
    
    //load the URL
    await page.goto("https://www.facebook.com")

    //title page
    const pageTitle = page.title()
    console.log("Page Title is : "+pageTitle) 
    
})