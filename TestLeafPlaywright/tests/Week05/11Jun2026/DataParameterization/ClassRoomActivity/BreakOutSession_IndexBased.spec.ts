import test from '@playwright/test'

import inputValue from '../../../../../utils/LT_Login.json'

//json - index value start from '0'

// const getValue = inputValue[0]

for(let getValue of inputValue) {

test(`Login with differen set of data ${getValue.TC_No}`, async({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("//input[@id='username']").fill(getValue.Username)
    await page.locator("//input[@id='password']").fill(getValue.Password)
    await page.locator("//input[@id='Login']").click()
})
}