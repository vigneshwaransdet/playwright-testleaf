import test, { expect } from '@playwright/test'

test.describe("Smoke testing Testcase", async() => {

    test.describe.configure({mode:'default'})
    
    test("Test 1", async({page}) => {
        await page.goto("https://www.leafground.com/input.xhtml")
        const title = await page.title()
        console.log(title)
        expect(title).toBe("Input Components")
    })

    test("Test 2", async({page}) => {
        await page.goto("https://www.leafground.com/file.xhtml")
        await page.locator("//input[@type='file']").first().setInputFiles('./TestData/String-HomeAssignment.pdf')
    })
})