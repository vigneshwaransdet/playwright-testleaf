import test from "@playwright/test";
import { MyHomePage_POM } from "../Pages/MyHomePage_POM.js";

test("Leaf Taps Leads POM Test", async ({ page }) => {
    //create object for the page
    let openLeadsTab = new MyHomePage_POM(page);

    //Load URL
    await openLeadsTab.LoadURL("http://leaftaps.com/opentaps/control/main");

    //Enter Username
    await openLeadsTab.enterUsername("DemoCsr");

    //Enter Password
    await openLeadsTab.enterPassword("crmsfa");

    //Click Login
    await openLeadsTab.clickLogin();

    //Click CRM/SFA
    await openLeadsTab.clickCRM();

    //Click Leads
    await openLeadsTab.clickOnLeads();
}
)

test("Leaf Taps Accounts POM Test", async ({ page }) => {
    //create object for the page
    let openAccountsTab = new MyHomePage_POM(page);

    //Load URL
    await openAccountsTab.LoadURL("http://leaftaps.com/opentaps/control/main");

    //Enter Username
    await openAccountsTab.enterUsername("DemoCsr");

    //Enter Password
    await openAccountsTab.enterPassword("crmsfa");

    //Click Login
    await openAccountsTab.clickLogin();

    //Click CRM/SFA
    await openAccountsTab.clickCRM();

    //Click Accounts
    await openAccountsTab.clickOnAccounts();
}
)