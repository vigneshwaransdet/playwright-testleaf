// Classroom Assignment: Conditional Statements
// Learning Objective:
// Learn if-else and switch case
// Expected Completion Time:
// Best Case: 15 minutes
// Average Case: 20 minutes
// Assignment Details:
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.
// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript
// Hints to Solve:
// For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
// `runTests`, use a `switch` statement to handle different `testType` values, including a default case.
// Expected Outcome:
// Upon completion, you should be able to:
// - Understand and implement different conditional statements using Javascript

// Assignment 01:
launchBrowser("chrome")
function launchBrowser(browserName) {
    if (browserName == "chrome") {
        console.log("chrome browser is launched")
    } else {
        console.log("chrome browser is not launched")
    }
}

// Assignment 02:
runTests("smoke")
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("smoke test")
            break;

        case "sanity":
            console.log("sanity test")
            break;

        case "regression":
            console.log("regression test")
            break;

        default:
            console.log("test is skipped")
            break;
    }
}