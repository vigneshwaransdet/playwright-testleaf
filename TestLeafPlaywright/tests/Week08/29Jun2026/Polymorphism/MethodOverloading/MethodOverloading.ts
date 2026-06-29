class BaseClass01 {

    ElementClick(locator: string): void 
    ElementClick(locator: string, forceClick: boolean):void  

    // ElementClick(locator: string): void {
    //     console.log("Clicking on element with locator")
    // }

    // ERROR: Duplicate function implementation.
    // ElementClick(locator: string, forceClick: boolean): void {
    //     console.log("Force clicking on element with locator")
    // }
    ElementClick(locator: string, forceClick?: boolean): void {
        if (forceClick===true) {
            console.log("Force click" + locator);
        }   
        else {
            console.log("Normal click" + locator);
        }   
    }
}

let bc01 = new BaseClass01()
bc01.ElementClick("xpath")
bc01.ElementClick("CSS", true)
bc01.ElementClick("CSS", false)