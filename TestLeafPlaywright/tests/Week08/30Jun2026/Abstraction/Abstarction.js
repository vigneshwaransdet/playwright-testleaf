"use strict";
class WrapperMethod {
    //both implemented and unimplemented methods
    // 0 to 100% abstract methods
    fill(locator, value) {
        console.log(locator, value);
        //await page.locator(locator).fill(value)
    }
}
// Example 1:
// let a = new WrapperMethod() // we cannot create object for abstract class, so this line will give error
//Points to remember
// class to class or class to abstract class inheritance is possible, but abstract class to class inheritance is not possible
//use extends keyword to inherit the abstract class in the child class
class WrapperMethodChild extends WrapperMethod {
    fileDownload() {
        console.log("File Downloaded");
    }
}
let wrapperMethodChild = new WrapperMethodChild();
wrapperMethodChild.fill("Css", "demo");
wrapperMethodChild.fileDownload();
