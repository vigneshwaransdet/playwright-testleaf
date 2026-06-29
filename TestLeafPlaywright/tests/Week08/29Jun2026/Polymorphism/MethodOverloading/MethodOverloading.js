"use strict";
class BaseClass {
    // ElementClick(locator: string): void {
    //     console.log("Clicking on element with locator")
    // }
    // ERROR: Duplicate function implementation.
    // ElementClick(locator: string, forceClick: boolean): void {
    //     console.log("Force clicking on element with locator")
    // }
    ElementClick(locator, forceClick) {
        if (forceClick === true) {
            console.log("Force click" + locator);
        }
        else {
            console.log("Normal click" + locator);
        }
    }
}
let bc = new BaseClass();
bc.ElementClick("xpath");
bc.ElementClick("CSS", true);
bc.ElementClick("CSS", false);
