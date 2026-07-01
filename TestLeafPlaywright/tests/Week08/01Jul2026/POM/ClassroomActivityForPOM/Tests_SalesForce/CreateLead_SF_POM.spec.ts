import { test, expect } from '@playwright/test';
import { VerifyLead_SF_POM } from '../Pages_SalesForce/VerifyLead_SF_POM.js';

test('SalesForce Create Lead Test in POM understanding', async ({ page }) => {
    //create object for the page
    let verifyLastNameFromLeadsTabSF = new VerifyLead_SF_POM(page);

    //Load URL
    await verifyLastNameFromLeadsTabSF.loadURLForSF("https://login.salesforce.com/");

    //Enter Username    
    await verifyLastNameFromLeadsTabSF.enterUsernameForSF("dilipkumar.rajendran@testleaf.com");

    //Enter Password
    await verifyLastNameFromLeadsTabSF.enterPasswordForSF("TestLeaf@2025");

    //Click on Login
    await verifyLastNameFromLeadsTabSF.clickLoginForSF();

    //Click on Leads Tab
    await verifyLastNameFromLeadsTabSF.clickOnLeadsForSF();

    //Click on New Button
    await verifyLastNameFromLeadsTabSF.clickOnNewButtonForSF();

    //Enter Last Name
    await verifyLastNameFromLeadsTabSF.enterLastNameForSF("Baskaran");

    //Enter Company Name
    await verifyLastNameFromLeadsTabSF.enterCompanyNameForSF("Norton");

    //Click on Save Button
    await verifyLastNameFromLeadsTabSF.clickOnSaveButtonForSF();

    //Verify the Lead Creation
    const lastName = await verifyLastNameFromLeadsTabSF.verifyLeadCreationForSF();
    console.log("last Name: " + lastName);
    expect(lastName).toBe("Baskaran");
}
)