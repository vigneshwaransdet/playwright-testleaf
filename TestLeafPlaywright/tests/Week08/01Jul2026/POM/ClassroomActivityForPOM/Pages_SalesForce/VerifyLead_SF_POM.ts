import { CreateLead_SF_POM } from "./CreateLead_SF_POM";


export class VerifyLead_SF_POM extends CreateLead_SF_POM {
    async verifyLeadCreationForSF() {
        // const lastName = await this.page.locator("//slot[@name='primaryField']").innerText();
        const lastName = await this.page.locator("//slot[@name='primaryField']").textContent();
        return lastName;
    }
}

