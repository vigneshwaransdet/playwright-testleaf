// reference code : 

/* let firstName="Bhuvanesh"
// redeclaration is not allowed
//let firstName="Akila" // SyntaxError: Identifier 'firstName' has already been declared
firstName="Vignesh" // reintialization is allowed
console.log(firstName)
//console.log(empNO) // hoisting is not allowed
//let empNO=1652
function print(){//body 
// local variable    
 let empAge=25 
 {
    //local variable
    let empPhno=897979697987;  // block scope
 }
 console.log(empPhno) //ReferenceError: empPhno is not defined
}
print() */

/* Assignment Requirements:
1. Declare a let name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript */

//Scenario: using let keyword
let browserVersion = "Chrome"; // global variable  

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        let browserVersion = "Google Chrome"; // local variable
    }
    console.log(browserVersion); // this is not allowed because let has block-scoped
}
getBrowserVersion();