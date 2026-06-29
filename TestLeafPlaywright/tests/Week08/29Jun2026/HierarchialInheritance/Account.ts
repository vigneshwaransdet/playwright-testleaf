import { Welcomepage_ML } from "../MultiLevelInheritance/WelcomePage_ML.js";

class AccountPage extends Welcomepage_ML{

    clickOnAccounts() {
        console.log("Accounts tab")
    }
}

let accountPage = new AccountPage()
accountPage.enterUsername()
accountPage.enterPassword()
accountPage.clickOnLogin()
accountPage.clickOnCRMSFA()
accountPage.clickOnAccounts()