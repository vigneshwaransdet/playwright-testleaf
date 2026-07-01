import { HomePage_SF_POM } from "./HomePage_SF_POM";


export class LeadsPage_SF_POM extends HomePage_SF_POM {
    async clickOnNewButtonForSF() {
        await this.page.locator("//a[@title='New']").click();
    }
}