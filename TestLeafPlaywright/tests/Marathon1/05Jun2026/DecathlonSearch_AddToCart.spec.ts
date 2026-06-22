import test, {expect} from "@playwright/test"
/*
**TEST CASE DOCUMENT**

**Test Case Name:** Search product, apply filters, add to cart in Decathlon

**Preconditions:** Browser should be launched. Internet connection should be available.

### Test Steps:

1. Launch the browser.
2. Navigate to https://www.decathlon.in/
3. Verify the user is navigated to the Decathlon home page.
4. Click on the Search icon on the home page.
5. Verify the search input field is enabled.
6. Enter the product name as **"shoes"** in the search field.
7. Press Enter to search the product.
8. Capture and print the page title in the console.
9. Verify the page title is displayed as **"Search | shoes"**.
10. Click on the **"Running"** category filter.
11. Click on the **"Men"** gender filter.
12. Click on the shoe size filter **"UK 10.5"**.
13. Click on the **Sort** option.
14. Select the sorting option **"Price: High to Low"**.
15. Click on the first product from the displayed product list.
16. Select the shoe size **"UK 10.5 - EU 45"** on the product detail page.
17. Click on the **"Add to Cart"** button.
18. Click on the **Cart** option.
19. Fetch the total cart value.
20. Print the total cart amount in the console.

### Expected Result:

Product should be successfully searched, filtered, added to cart, and the total cart value should be displayed and printed in the console.
*/

test("Decathlon search and Add to cart", async({page}) => {

    // 2. Navigate to https://www.decathlon.in/
    await page.goto("https://www.decathlon.in/")

    // 3. Verify the user is navigated to the Decathlon home page.
    const title = await page.title()
    console.log(title)
    expect(title).toBe("Buy Sporting Goods, Sportswear and Equipments | Download App")    
    console.log("After Assertion")

    //  4. Click on the Search icon on the home page.
    await page.locator("//input[@type='search']").click()

    // 5. Verify the search input field is enabled.
    const searchFieldEnabled = page.locator("//input[@type='search']")
    await expect(searchFieldEnabled).toBeEnabled()

    // 6. Enter the product name as **"shoes"** in the search field.
    await searchFieldEnabled.fill("shoes")

    // 7. Press Enter to search the product.
    await searchFieldEnabled.press('Enter')

    // 8. Capture and print the page title in the console.
    const shoesTitle = await page.title()
    console.log(shoesTitle)    

    // 9. Verify the page title is displayed as **"Search | shoes"**.    
    expect(shoesTitle).toBe("Search | shoes")    
    console.log("shoesTitle After Assertion")
    await page.waitForTimeout(2000)

    // 10. Click on the **"Running"** category filter.
    await page.locator("//button[@type='button']//span[text()='Sport']").click()

    //Click on Running check box
    await page.locator("//div[@id='sport_pratice_en']//span[text()='Running']//preceding-sibling::label//input[@type='checkbox']").click()

    // 11. Click on the **"Men"** gender filter.
    // await page.locator("//div[@data-test-id='navigation-category-Men']").click()
    await page.locator("//button[@type='button']//span[text()='Gender']").click()
    await page.locator("//span[text()='Men']//preceding-sibling::label//input[@type='checkbox']").click()

    // 12. Click on the shoe size filter **"UK 10.5"**.
    await page.locator("//span[text()='Size']").click()
    await page.waitForTimeout(2000)

    //Click on UK 10.5 checkbox
    await page.locator("//span[text()='Uk 10.5 - eu 45']//preceding-sibling::label//input[@type='checkbox']").click()
    await page.waitForTimeout(2000)
    
    // 13. Click on the **Sort** option.
    await page.locator("//span[text()='Most relevant']").click()

    // 14. Select the sorting option **"Price: High to Low"**.
    await page.locator("//span[text()='Price (high → low) ']").click()
    await page.waitForTimeout(2000) 

    // 15. Click on the first product from the displayed product list.
    await page.locator("(//div[@data-test-id='product-card:product-card:title'])[1]").click()
    await page.waitForTimeout(2000)    

    // 16. Select the shoe size **"UK 10.5 - EU 45"** on the product detail page.
    if(await page.locator("//div[text()='Size Unavailable? Explore more styles']").getByText("Size Unavailable? Explore more styles")) {
        await page.locator("//div[@aria-label='Close']").click()
    }
    await page.waitForTimeout(2000)

    //Click on the available stock in the list
    await page.locator("(//li[@role='listitem']//button[@data-test-id='pdp-color-selector-desktop:option-button'])[1]").click()

    await page.locator("//li[@role='listitem']//button//span[text()='10.5']").click()

    // 17. Click on the **"Add to Cart"** button.
    await page.locator("//span[text()='Add to cart']").click()

    // 18. Click on the **Cart** option.
    await page.locator("//span[text()='Cart']").click()

    // 19. Fetch the total cart value.
    // const totalCartVal = await page.locator("(//div[@data-test-id='price-section-container']//div)[1]").getByText("2,499")    
    const totalCartVal = await page.locator("(//div[@data-test-id='price-section-container']//div)[1]").textContent()
    
    // 20. Print the total cart amount in the console.
    console.log(totalCartVal)    
})