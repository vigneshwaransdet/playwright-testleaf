import { LoginPage_POM } from "./LoginPage_POM";

export class WelComePage_POM extends LoginPage_POM {
    
    async clickCRM() {
        await this.page.locator("text=CRM/SFA").click();
    }

    async clickOnLogout() {
        await this.page.locator(".decorativeSubmit").click();
    }

}