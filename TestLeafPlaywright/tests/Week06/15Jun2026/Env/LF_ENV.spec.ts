import test from '@playwright/test'

//need to check with Dilip
import dotenv from 'dotenv'
//set the value from env
dotenv.config({path:'utils/QA.env'})

test("Using ENV file",async({page}) => {

    //process.env.keyname

    //process -> global object for Node.js
    //env -> environment
    //keyName -> LT_username,url,testcase_No

    let url = process.env.url as string
    let username=process.env.LT_username as string
    let password=process.env.LT_password as string

    await page.goto(url)
    await page.locator("#username").fill(username)
    await page.locator("#password").fill(password)
    await page.locator(".decorativeSubmit").click()
})