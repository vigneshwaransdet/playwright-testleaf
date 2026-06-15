import test from '@playwright/test'
// import { Parser } from 'csv-parse' 
import { parse } from 'csv-parse/sync'
import fs from 'fs'
//read const variable

//need to check with Dilip
const value:any[]=parse(fs.readFileSync('utils/Login.csv'),{columns:true,skip_empty_lines:true})

test(`Using CSV file ${data.TC_No} `, async({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("")
    await page.locator("#password").fill("")
    await page.locator(".decorativeSubmit").click()
})