import { Page } from "@playwright/test";

export class LoginPage_SF_POM {

    //Global Variable
    page: Page

    //page reference to all page
    constructor(page: Page) {
        this.page = page;
    }

    async loadURLForSF(url: string) {
        await this.page.goto(url);
    }


    async enterUsernameForSF(username: string) {
        await this.page.locator("#username").fill(username);
    }

    async enterPasswordForSF(password: string) {
        await this.page.locator("#password").fill(password);
    }

    async clickLoginForSF() {
        await this.page.locator("#Login").click();
    }

}