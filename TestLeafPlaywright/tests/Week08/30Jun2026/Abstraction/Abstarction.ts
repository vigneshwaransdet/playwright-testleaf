abstract class WrapperMethod {

    //both implemented and unimplemented methods
    // 0 to 100% abstract methods

    fill(locator: string, value: string) {
        console.log(locator,value)
        //await page.locator(locator).fill(value)
    }

    //fill("#username","DemoCsr")

    // Points to remember about abstract class:
    /*
        Dilip says, while he will do the Page object model session, he will explain this concept in detail.
    */
    
        //so inthe method vanthu, future la use panra mari iruntha, 
        // for time being we can create unimplemented method and implement it in the child class, 
        // so that we can use it in the child class
    abstract fileDownload(): void
}

// Example 1:
// let a = new WrapperMethod() // we cannot create object for abstract class, so this line will give error

//Points to remember
// class to class or class to abstract class inheritance is possible, but abstract class to class inheritance is not possible
//use extends keyword to inherit the abstract class in the child class

class WrapperMethodChild extends WrapperMethod {

    fileDownload(): void {
        console.log("File Downloaded")
    }
}

let wrapperMethodChild = new WrapperMethodChild()
wrapperMethodChild.fill("Css","demo")
wrapperMethodChild.fileDownload()