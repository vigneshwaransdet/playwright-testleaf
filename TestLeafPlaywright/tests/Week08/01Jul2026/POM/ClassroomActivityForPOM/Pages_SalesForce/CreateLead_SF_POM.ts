import { LeadsPage_SF_POM } from "./LeadsPage_SF_POM";


export class CreateLead_SF_POM extends LeadsPage_SF_POM {

    async enterLastNameForSF(lastName: string) {
        await this.page.locator("//input[@name='lastName']").fill(lastName)
    }

    async enterCompanyNameForSF(companyName: string) {
        await this.page.locator("//input[@name='Company']").fill(companyName)
    }

    async clickOnSaveButtonForSF() {
        await this.page.locator("//button[@name='SaveEdit']").click();
    }

}