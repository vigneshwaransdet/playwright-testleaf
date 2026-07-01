import { Page } from "@playwright/test";


export class LoginPage_POM {

    //Global Variable
    page: Page

    //page reference to all page
    constructor(page: Page) {
        this.page = page;
    }   

    async LoadURL(url: string) {
        await this.page.goto(url);
    }

    async enterUsername(username: string) {
        await this.page.locator("#username").fill(username);
    }   

    async enterPassword(password: string) {
        await this.page.locator("#password").fill(password);
    }       

    async clickLogin() {
        await this.page.locator(".decorativeSubmit").click();
    }   
   
}
