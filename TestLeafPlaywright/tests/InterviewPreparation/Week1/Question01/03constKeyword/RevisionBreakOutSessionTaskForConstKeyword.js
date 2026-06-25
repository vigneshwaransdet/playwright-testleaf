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
    const browserVersion = "Google Chrome 01" // ithu vanthu re-declaration ah consider panathu, 
    // bcoz ithu vanthu function-scoped kula 1st time ah consider panuthu
    // const browserVersion = "Egde"//SyntaxError: Identifier 'browserVersion' has already been declared due to re-declaration is not allowed,
                                    // bcoz ithu vanthu function-scoped kula 2nd time ah consider panuthu
    if (browserVersion === "Google Chrome 01") { // inga Google Chrome 01 === Google Chrome 01 ah irukanu check panum
        const browserVersion = "Google Chrome 02" // ithu re-declare agalam bcoz ithu block-scoped kula 1st time varathunala new ah consider panuthu
        // browserVersion = "firefox" // re-intialization is not allowed bcoz ithu block-scoped kula 2nd time varuthu
        // const browserVersion = "firefox" // SyntaxError: Identifier 'firstName' has already been declared due to re-declaration is not allowed
                                            //  bcoz ithu block-scoped kula 2nd time varuthu
        console.log(browserVersion) // this will print "Google Chrome 02" due to block-scoped        
    }
    console.log(browserVersion)  // this will print "Google Chrome 01" due to block-scoped, it's not function-scoped
}
console.log(browserVersion) // this will print "Chrome" due to global variable already declared
getBrowserVersion()