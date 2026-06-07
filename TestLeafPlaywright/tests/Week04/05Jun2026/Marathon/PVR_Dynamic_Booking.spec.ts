import test, { expect } from "@playwright/test"
/*
Test Case Title
Verify dynamic movie ticket booking flow in PVR Cinemas website

Preconditions
User has internet access
PVR Cinemas website is accessible
Test Steps
1. Launch the browser.
2. Navigate to https://www.pvrcinemas.com/.
3. Select the required city.
4. Click on the Cinema option.
5. Click on Select Cinema dropdown.
6. Select any available cinema from the list.
7. Select any available date (Today/Tomorrow/Upcoming).
8. Select any available movie from the movie list.
9. Select any available show time.
10. Click on the Submit button.
11. Accept the consent/cookie popup if displayed.
12. Accept any additional confirmation popup if displayed.
13. Select any available seat from the seating layout.
14. Verify the selected seat information is displayed.
15. Verify the total ticket amount is displayed.
16. Verify the page title is displayed correctly.
17. Click on the Proceed button.

Expected Result
User should be able to dynamically select cinema, movie, date, show time, and seat, view booking
details, and proceed successfully
*/

test("PVR Dynamic movie ticket Booking", async({page}) => {

    //2. Navigate to https://www.pvrcinemas.com/.
    await page.goto("https://www.pvrcinemas.com/")

    // 3. Select the required city
    await page.locator("//h6[text()='Chennai']").click()

    // 4. Click on the Cinema option.
    await page.locator("//span[text()='Cinema']").click()

    // 5. Click on Select Cinema dropdown.
    await page.locator("//div[@id='cinema']//span[@class='p-dropdown-label p-inputtext p-placeholder']").click()

    // 6. Select any available cinema from the list
    await page.locator("//span[contains(text(),'Phoenix')]").click()

    // 7. Select any available date (Today/Tomorrow/Upcoming) 
    await page.locator("//div[@id='date']//span[text()='Select Date']").click() 
    //If I add this below line, then only the Date is clicked, To Be Discussed 
    await page.locator("//div[@id='date']//span[text()='Select Date']").click()         
    
    // Selecting tomorrow
    // await page.locator("//li[@class='p-dropdown-item']//span[contains(text(),'Tomorrow')]").click()
    await page.locator("(//li[@class='p-dropdown-item']//span)[2]").click()
    
        
    // 8. Select any available movie from the movie list
    await page.locator("//div[@id='movie']//span[text()='Select Movie']").click()  
    //If I add this below line, then only the Movie is clicked, To Be Discussed 
    await page.locator("//div[@id='movie']//span[text()='Select Movie']").click()

    //Select first movie in the list    
    await page.locator("(//li[@class='p-dropdown-item']//span)[1]").click()     

    await page.locator("//div[@id='time']//span[text()='Select Timing']").click()
    //If I add this below line, then only the time is clicked, To Be Discussed
    await page.locator("//div[@id='time']//span[text()='Select Timing']").click()
    const timeItem = page.locator(".p-dropdown-panel li.p-dropdown-item").first()
    await timeItem.click()

    // Time selection register aagardha confirm pannunga
    await expect(page.locator("//div[@id='time']//span[text()='Select Timing']")).toHaveCount(0)

    // 10. Click on the Submit button.
    await page.locator("//button[@type='submit']//span[text()='Book']").click()

    // 11. Accept the consent/cookie popup if displayed.
    if((await page.locator("//div[@class='p-dialog-content']").isVisible)) {        
        await page.locator("//button[text()='Accept']").click()
    }

    // I added the another way, but this below line of code is not working, 
    // const consentPopup = page.locator("//div[@class='p-dialog-content']");
    // if (await consentPopup.isVisible()) {
    //     await page.locator("//button[text()='Accept']").click();
    // }

    // 12. Accept any additional confirmation popup if displayed
    //No popup shows here

    // 13. Select any available seat from the seating layout.
    // for seat selection
    await page.locator("(//span[@class='seat-current-pvr'])[1]").click()


    // 14. Verify the selected seat information is displayed.
    const seatNumber = page.locator("//div[@class='seat-number']//p");
    await expect(seatNumber).toBeVisible();

    // 15. Verify the total ticket amount is displayed.
    const totalAmount = page.locator("//div[@class='grand-prices']//h6");
    await expect(totalAmount).toBeVisible();    

    // 16. Verify the page title is displayed correctly.  
    const title = await page.title()
    console.log(title)
    expect(title).toBe("PVR Cinemas")    
    console.log("After Assertion")

    // 17. Click on the Proceed button.
    await page.locator("//button[text()='Proceed']").click() 

    // Verify that clicking Proceed navigates to the Grab Food (Select Food) page.
    await page.waitForURL("**/select-food");
    await expect(page).toHaveURL(/select-food/);
})