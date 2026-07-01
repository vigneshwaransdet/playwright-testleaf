"use strict";
//to connect interface to interface we use extends keyword
//can't create object of interface, but we can create reference variable of interface and assign the object of class which implements the interface.
// class ImplemenmtBrowser implements browserMethod {    
//     browserName(): void {
//         console.log("Browser Name is Chrome")
//     }       
//     browserVersion(): void {
//         console.log("Browser Version 149.0")
//     }
// }
// let browserMethod = new ImplemenmtBrowser()
// browserMethod.browserName()
// browserMethod.browserVersion()
class ImplemenmtBrowser {
    multiply() {
        console.log("Multiplication is 100");
    }
    add() {
        console.log("Addition is 200");
    }
    browserName() {
        console.log("Browser Name is Chrome");
    }
    browserVersion() {
        console.log("Browser Version 149.0");
    }
}
let obj = new ImplemenmtBrowser();
obj.add();
obj.multiply();
obj.browserName();
obj.browserVersion();
