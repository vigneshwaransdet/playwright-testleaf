import test from '@playwright/test'

import inputValue from '../../../../utils/LT_Login.json'

for(let getValue of inputValue) {

test(`Login with differen set of data ${getValue.TC_No}`, async({page}) => {

    await page.goto("https://www.facebook.com/")
    await page.locator("//input[@name='email']").fill(getValue.Username)
    await page.locator("//input[@name='pass']").fill(getValue.Password)
    await page.locator("//span[text()='Log in']").click()

})
}