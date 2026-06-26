// reference code : 

/* 
const firstName="Bhuvanesh"
//const firstName="Akila" // declaration is not allowed
// reintialization in not allowed
//firstName="Vignesh" // TypeError: Assignment to constant variable.
console.log(firstName) 
// console.log(empNo) //ReferenceError: empNo is not defined // hoisting is not allowed
// const empNo=1624
// function scope or blocked scoped
function print(){//body 
// local variable    
 const empAge=25 
 {
    //local variable
    const empPhno=897979697987;  // Block scoped
 }
 console.log(empPhno) 
}
print()
 */

/* Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript */

//Scenario: using const keyword
const browserVersion = "Chrome"; // global variable  

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        const browserVersion = "Google Chrome"; // local variable
    }
    console.log(browserVersion); // this is not allowed because of block-scoped and const does not allow redeclaration
}
getBrowserVersion();