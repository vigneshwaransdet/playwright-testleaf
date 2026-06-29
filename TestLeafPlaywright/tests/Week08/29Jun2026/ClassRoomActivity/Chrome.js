//child class
import { Browser } from "./Browser.js";
class Chrome extends Browser {
    launchBrowser() {
        console.log("Launch Chrome Browser");
    }
}
let chrome = new Chrome();
chrome.browserType();
chrome.browserVersion();
chrome.launchBrowser();
