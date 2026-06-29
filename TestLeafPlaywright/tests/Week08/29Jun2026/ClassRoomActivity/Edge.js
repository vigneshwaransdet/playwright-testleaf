//child class 
import { Browser } from "./Browser.js";
class Edge extends Browser {
    launchBrowser() {
        console.log("Launch Edge Browser");
    }
}
let edge = new Edge();
edge.browserType();
edge.browserVersion();
edge.launchBrowser();
