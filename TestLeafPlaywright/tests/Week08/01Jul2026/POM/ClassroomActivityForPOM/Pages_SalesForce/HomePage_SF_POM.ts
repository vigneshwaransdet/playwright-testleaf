import { LoginPage_SF_POM } from "./LoginPage_SF_POM";


export class HomePage_SF_POM extends LoginPage_SF_POM {

    async clickOnLeadsForSF() {
        await this.page.locator("//a[@title='Leads']").click();
    }

    async clickOnAccountsForSF() {
        await this.page.locator("//a[@title='Accounts']").click();
    }
}
