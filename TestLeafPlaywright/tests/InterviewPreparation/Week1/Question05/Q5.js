/*
Q5. In JavaScript, why are strings immutable?
What does it mean when we say "modifying" a string?
*/

// Strings are immutable in JavaScript.
// Immutable means the contents of a string cannot be changed
// after the string is created.

// When we "modify" a string,
// JavaScript does NOT change the existing string.
// Instead, it creates a NEW string in a new memory location,
// and the variable starts pointing to the new string.

let str = "test";      // Memory Location A

str = str + "leaf";    // Creates a new string "testleaf"
// Memory Location B

console.log(str);      // testleaf



//------------------------------------------------------
// Example 1
//------------------------------------------------------

let company = "Testleaf";

// replace() does not modify the original string.
// It returns a new string.

let newCompany = company.replace("Test", "QA");

console.log(company);      // Testleaf
console.log(newCompany);   // QAleaf



//------------------------------------------------------
// Example 2
//------------------------------------------------------

let browser = " Chrome ";

let trimmedBrowser = browser.trim();

console.log(browser);         // " Chrome "
console.log(trimmedBrowser);  // "Chrome"

// The original string remains unchanged.



//------------------------------------------------------
// Example 3
//------------------------------------------------------

let language = "Java";

language.toUpperCase();

console.log(language); // Java

// toUpperCase() returns a new string.
// Since it is not assigned back,
// the original string remains unchanged.



//------------------------------------------------------
// Example 4
//------------------------------------------------------

let course = "playwright";

course = course.toUpperCase();

console.log(course); // PLAYWRIGHT

// A new string is created and
// the variable now points to the new string.



/*
Memory Representation
---------------------

Before Modification

str
 |
 v
+--------+
| "test" |
+--------+
 Memory A


After Modification

str
 |
 v
+------------+
| "testleaf" |
+------------+
 Memory B


The original string ("test") still exists
until JavaScript's Garbage Collector removes it.
*/



/*
Why are strings immutable?
--------------------------

1. Improves memory efficiency.
2. Prevents accidental modification.
3. Makes strings safer to share between variables.
4. Simplifies comparison and optimization.
*/



/*
String Methods That Return New Strings
--------------------------------------

trim()
replace()
replaceAll()
toUpperCase()
toLowerCase()
substring()
slice()
concat()

None of these methods modify the original string.
They always return a new string.
*/



/*
Why is this useful in Test Automation?
--------------------------------------

In automation scripts, we often clean UI data before validation.

Examples:
- trim()
- replace()
- replaceAll()
- toUpperCase()

These methods never modify the original value.
Instead, they return a new string, making the original data safe
to reuse later in the test.
*/