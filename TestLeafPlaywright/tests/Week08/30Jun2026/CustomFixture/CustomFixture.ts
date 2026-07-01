import {test as CF} from '@playwright/test'

//Notes:
/*
    LeafTapsLogin is a custom fixture that logs into the LeafTaps application before running the test. 
    It navigates to the login page, fills in the username and password, and clicks the submit button. 
    The 'use' function is called with the page object after the login process is complete, allowing tests to run with an authenticated session.

    We should use export keyword, so that const customFixture = CF.extend<{LeafTapsLogin:any}> ({}) to export the custom fixture so that it can be used in other test files.
*/
export const customFixture = CF.extend<{LeafTapsLogin:any}> ({

    LeafTapsLogin: async ({page}, use:any) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemoCsr")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
        
        // Call the 'use' function with the page object after login
        await use(page)
    }

})

//Points to remember
/*
ipo vanthu intha line ah -> await use(page) comment panitu execute pana ena agum nu below explanation kuduthrukan, 
intha class file ah LoginForCustomFixture.spec.ts execute panomna, 
till these lines will work
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoCsr")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()

but intha class file kula irukra
path -> "./TestLeafPlaywright/tests/Week08/30Jun2026/CustomFixture/LoginForCustomFixture.spec.ts
import { customFixture } from './CustomFixture'

customFixture("Use Custom Fixture", async ({LeafTapsLogin}) => {
    await LeafTapsLogin.locator("text=CRM/SFA").click()    
})

intha line execute agathu
await LeafTapsLogin.locator("text=CRM/SFA").click()
*/