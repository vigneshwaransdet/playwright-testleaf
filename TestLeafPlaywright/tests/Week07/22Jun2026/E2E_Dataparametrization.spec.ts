import { test } from '@playwright/test'
import dotenv from 'dotenv'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

import editLead from '../../../DataDriven/editLead.json'
import { leadLocators } from '../../../DataDriven/locator'

// Only QA Environment
dotenv.config({
    path: 'DataDriven/QA.env'
})

// DataDriven/createLead.csv
const lead: any[] = parse (fs.readFileSync('DataDriven/createLead.csv'),{columns: true, skip_empty_lines: true})

for (const data of lead) {

    test(`E2E Data Parametrization - ${data.firstName}`, async ({ page }) => {

        await page.goto(process.env.Leaf_url as string)

        await page.locator(leadLocators.username).fill(process.env.Leaf_username as string)

        await page.locator(leadLocators.password).fill(process.env.Leaf_password as string)

        await page.locator(leadLocators.loginButton).click()

        await page.locator(leadLocators.crmSfaLink).click()

        await page.getByRole('link', {name: leadLocators.leadsLink}).click()

        await page.getByRole('link', {name: leadLocators.createLeadLink}).click()

        await page.locator(leadLocators.companyName).fill(data.companyName)

        await page.locator(leadLocators.firstName).fill(data.firstName)

        await page.locator(leadLocators.lastName).fill(data.lastName)

        await page.locator(leadLocators.createLeadButton).click()

        await page.locator(leadLocators.editLink).click()

        await page.locator(leadLocators.editCompanyName).fill(editLead.EdcompanyName)

        await page.locator(leadLocators.editFirstName).fill(editLead.EdfirstName)

        await page.locator(leadLocators.editLastName).fill(editLead.EdlastName)

        await page.getByRole('button', {name: leadLocators.updateButton}).click()
    })
}


/* import test from '@playwright/test'
import dotenv from 'dotenv'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import editLead from '../../../DataDriven/editLead.json'

let environment = process.env.envFile||'QA'||'Credentials'
dotenv.config({path:`DataDriven/${environment}.env`})
//dotenv.config({path:'DataDriven/Credentials.env'}) -- single env file setup
let lead:any[] = parse(fs.readFileSync('DataDriven/createLead.csv'),{columns:true,skip_empty_lines:true})
for(let data of lead){
test("E2E Data parametrization",async({page})=>{
    await page.goto (process.env.Leaf_url as string)
    await page.locator("#username").fill(process.env.Leaf_username as string)
    await page.locator("#password").fill(process.env.Leaf_password as string)
    await page.locator(".decorativeSubmit").click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('link',{name:'Create Lead'}).click()
    await page.locator("#createLeadForm_companyName").fill(data.companyName)
    await page.locator('#createLeadForm_firstName').fill(data.firstName)
    await page.locator("#createLeadForm_lastName").fill(data.lastName)
    await page.locator(".smallSubmit").click()
    await page.locator("//div[@class='frameSectionExtra']/a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill(editLead.EdcompanyName)
    await page.locator("#updateLeadForm_firstName").fill(editLead.EdfirstName)
    await page.locator("#updateLeadForm_lastName").fill(editLead.EdlastName)
    await page.getByRole('button',{name:'Update'}).click()
})
} */