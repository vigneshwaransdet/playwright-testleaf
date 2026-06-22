import test, { expect } from '@playwright/test'

import inputValue from '../../../Utils/ServiceNow_iPhone13Pro.json'

/*
Manual Test Case – ServiceNow Service Catalog
Test Case Title
Verify placing an order for Apple iPhone 13 Pro from ServiceNow Service Catalog
Preconditions
• ServiceNow application is accessible
• Valid admin credentials are available
Test Steps
1. Launch the ServiceNow application using the given URL.
2. Enter User name as admin.
3. Enter Password with valid credentials.
4. Click on the Log in button.
5. Wait for the ServiceNow home page to load successfully.
6. Click on the All menu from the left navigation panel.
7. Click on Service Catalog from the menu options.
8. Switch to the Service Catalog iframe.
9. Click on the Mobiles category.
10. Select Apple iPhone 13 Pro from the product list.
11. Choose Yes for the Lost or Broken iPhone option.
12. Enter 99 in the Original phone number field.
13. Select Unlimited from the Monthly data allowance dropdown.
14. Select Sierra Blue as the color option.
15. Select 512 GB as the storage option.
16. Click on the Order Now button.
17. Verify the confirmation message is displayed.
18. Capture a full-page screenshot of the order confirmation page.
Expected Result
• The order for Apple iPhone 13 Pro is successfully placed.
• Confirmation message is displayed.
• Screenshot is captured for proof.
Postconditions
• Order request is created successfully in ServiceNow

*/

for(let getValue of inputValue) {
    
test (`Place order for iPhone 13 Pro in Service Now ${getValue.TC_No}`, async({page}) => {
    
    // 1. Launch the ServiceNow application using the given URL.    
    await page.goto("https://dev296651.service-now.com/login")    
   
    // 2. Enter User name as admin.
    // await page.locator("#user_name").fill("admin")
    await page.locator("#user_name").fill(getValue.Username)

    // 3. Enter Password with valid credentials.
    // await page.locator("#user_password").fill("E7i*7wNgX*mM")
    await page.locator("#user_password").fill(getValue.Password)

    // 4. Click on the Log in button.
    await page.locator("#sysverb_login").click()

    // 5. Wait for the ServiceNow home page to load successfully.

    // 6. Click on the All menu from the left navigation panel.    
    await page.getByText(getValue.Tab).click()
    
    // 7. Click on Service Catalog from the menu options.
    await page.getByText(getValue.MenuListValue).click();

    // 8. Switch to the Service Catalog iframe.
    const frameIndexValue = page.frames()
    console.log("Total frames in the page: "+frameIndexValue.length)

    const frameLocatorElement = await page.frameLocator("#gsft_main")
    // 9. Click on the Mobiles category.
    // Handle frame with index value
    // await frameValue[1].locator("//a[contains(@aria-label,'Mobiles')]").click()  
    await frameIndexValue[1].locator("//a[contains(@aria-label,'"+getValue.Category+"')]").click() 

    // 10. Select Apple iPhone 13 Pro from the product list
    // Handle frame with Frame Locator    
    // await page.frameLocator("(//iframe)[1]").locator("//strong[text()='Apple iPhone 13 pro']").click()
    // await frameValue[1].locator("//strong[text()='Apple iPhone 13 pro']").click()
    // await page.frameLocator("#gsft_main").locator("//strong[text()='Apple iPhone 13 pro']").click()   
    // await page.frameLocator("#gsft_main").locator("//strong[text()='"+getValue.Model+"']").click()
    await frameLocatorElement.locator("//strong[text()='"+getValue.Model+"']").click()

    // 11. Choose Yes for the Lost or Broken iPhone option
    // await frameValue[1].getByLabel('Yes').click();
    // await page.frameLocator("#gsft_main").locator("//div[@class='sc-radio']//label[@class='radio-label' and text()='Yes']").click()
    // await page.frameLocator("#gsft_main").locator("//div[@class='sc-radio']//label[@class='radio-label' and text()='"+getValue.Replacement+"']").click()
    await frameLocatorElement.locator("//div[@class='sc-radio']//label[@class='radio-label' and text()='"+getValue.Replacement+"']").click()

    // 12. Enter 99 in the Original phone number field.
    // await frameValue[1].locator("//input[contains(@class,'cat_item_option s')]").fill("99")
    await frameIndexValue[1].locator("//input[contains(@class,'cat_item_option s')]").fill(getValue.PhoneNo)
    // await page.frameLocator("#gsft_main").locator("//div[@class='sc-radio']//label[@class='radio-label' and text()='Yes']").click()

    // 13. Select Unlimited from the Monthly data allowance dropdown    
    // await page.selectOption(".form-control.cat_item_option", {value:'unlimited'})
    // await frameValue[1].selectOption("//select[contains(@name,'IO')]",{value:'unlimited'})
    await frameIndexValue[1].selectOption("//select[contains(@name,'IO')]",{value:getValue.DataAllowance})
    // await frameValue[1].locator("(//select)[1]").selectOption({value:'unlimited'})

    // 14. Select Sierra Blue as the color option.
    // await frameValue[1].getByLabel('Sierra Blue').click()
    // await page.frameLocator("#gsft_main").locator("//div[@class='sc-radio']//label[@class='radio-label' and text()='"+getValue.Colour+"']").click()
    await frameLocatorElement.locator("//div[@class='sc-radio']//label[@class='radio-label' and text()='"+getValue.Colour+"']").click()
    
    // 15. Select 512 GB as the storage option.    
    // await page.frameLocator("#gsft_main").locator("//label[contains(text(),'"+getValue.Storage+"')]").click()
    await frameLocatorElement.locator("//label[contains(text(),'"+getValue.Storage+"')]").click()
    
    // 16. Click on the Order Now button.    
    await frameIndexValue[1].locator("//button[text()='Order Now']").click()
    await page.waitForTimeout(4000)
    
    // 17. Verify the confirmation message is displayed.
    // const orderConfMessage = await page.frameLocator("#gsft_main").locator("//span[text()='Thank you, your request has been submitted']").innerText()
    const orderConfMessage = await frameLocatorElement.locator("//span[text()='Thank you, your request has been submitted']").innerText()
    console.log(orderConfMessage)
    await expect.soft(orderConfMessage).toBe("Thank you, your request has been submitted")

    // 18. Capture a full-page screenshot of the order confirmation page.
    await page.screenshot({path:`TestData/iPhone13ProOrderConfMsg.png`,fullPage: true})    
})
}