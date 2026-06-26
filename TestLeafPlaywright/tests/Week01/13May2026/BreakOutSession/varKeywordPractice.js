// reference code : 

/*
var firstName="Bhuvanesh"
var firstName="Akila"// redeclaration is allowed
console.log(firstName) 
firstName="vignesh" // reinitialization is allowed
console.log(firstName) 
console.log(empNo) // hoisting is allowed
var empNo= 1234 
// keyword 
function print(){//body // function scope
// local variable    
 var empAge=25 
 {
    //local variable
    var empPhno=897979697987;  
 }
 console.log(empPhno)
}
print()
//console.log(empPhno)
*/

/* Assignment Requirements:
1. Declare a var name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript */

//Scenario: using var keyword
var browserVersion = "Chrome"; // global variable

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        var browserVersion = "Google Chrome"; // local variable
    }
    console.log(browserVersion); // this is allowed
}
getBrowserVersion();    