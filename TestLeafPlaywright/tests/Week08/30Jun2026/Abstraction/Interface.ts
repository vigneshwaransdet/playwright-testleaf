interface browserMethod {
    //100% abstarct method
    browserName(): void
    browserVersion(): void
} 

interface a {
    add():void
}

interface b extends a, browserMethod {
    multiply():void
}

// Example 1: for single interface implementation
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

// Example 2: for multiple interface implementation
class ImplemenmtBrowser implements b {
    multiply(): void {
        console.log("Multiplication is 100")
    }
    add(): void {
        console.log("Addition is 200")        
    }
    browserName(): void {
        console.log("Browser Name is Chrome")
    }
    browserVersion(): void {
        console.log("Browser Version 149.0")
    }        
}

let obj = new ImplemenmtBrowser()
obj.multiply()
obj.add()
obj.browserName()
obj.browserVersion()    


// Points to remember:
//to connect interface to interface we use extends keyword
//can't create object of interface, but we can create reference variable of interface and assign the object of class which implements the interface.