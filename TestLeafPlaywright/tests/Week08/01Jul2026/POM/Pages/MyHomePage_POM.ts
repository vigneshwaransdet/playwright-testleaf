import { WelComePage_POM } from "./WelcomePage_POM";


export class MyHomePage_POM extends WelComePage_POM {

    async clickOnLeads() {
        await this.page.locator("//a[text()='Leads']").click();
    }    

    async clickOnAccounts() {
        await this.page.locator("//a[text()='Accounts']").click();
    }   
}