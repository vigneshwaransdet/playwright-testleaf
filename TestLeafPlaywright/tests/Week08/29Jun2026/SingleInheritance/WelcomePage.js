//child page
import { LoginPage } from "./Login.js";
class Welcomepage extends LoginPage {
    clickOnCRMSFA() {
        console.log("CRM/SFA");
    }
}
//create a object for child class
let welcomePage = new Welcomepage();
welcomePage.enterUsername();
welcomePage.enterPassword();
welcomePage.clickOnLogin();
welcomePage.clickOnCRMSFA();
