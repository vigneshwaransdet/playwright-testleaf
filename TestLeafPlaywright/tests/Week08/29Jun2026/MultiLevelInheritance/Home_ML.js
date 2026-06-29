import { Welcomepage_ML } from "./WelcomePage_ML.js";
class HomePage_ML extends Welcomepage_ML {
    clickLeads() {
        console.log("Leads");
    }
}
let homePage = new HomePage_ML();
homePage.enterUsername();
homePage.enterPassword();
homePage.clickOnLogin();
homePage.clickOnCRMSFA();
homePage.clickLeads();
