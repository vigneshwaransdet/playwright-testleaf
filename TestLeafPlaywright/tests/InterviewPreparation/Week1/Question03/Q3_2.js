/*
Q3. How does trim() improve reliability in form input automation?
*/

// =========================================================================================================

// trim()

// Definition:
// trim() removes whitespace from both the beginning (leading)
// and the end (trailing) of a string.
//
// It returns a new string without modifying the original string.

// Syntax:

string.trim()

// =========================================================================================================

// Examples

const companyName = " Testleaf ";

console.log(companyName.trim()); // "Testleaf"
console.log(companyName);        // " Testleaf " (Original string is unchanged)

const username = "  Vignesh  ";

console.log(username.trim()); // "Vignesh"

// =========================================================================================================

// Why is trim() Important in Automation Testing?

// In web applications, users may accidentally enter
// leading or trailing spaces while filling forms.
//
// If we validate the value without trimming,
// the comparison may fail even though the actual text is correct.

// Example:

let expectedName = "Testleaf";
let actualName = " Testleaf ";

console.log(expectedName == actualName);         // false
console.log(expectedName == actualName.trim());  // true

// =========================================================================================================

// Removing Whitespace Between Characters

// trim() removes spaces only from the beginning and end.
// It does NOT remove spaces inside the string.

// Example:

let company = "t e s t l e a f";

let trimmedCompany = company.replace(/\s/g, "");

console.log(trimmedCompany); // "testleaf"

// =========================================================================================================

// Understanding /\s/g

// /\s/g is a Regular Expression (RegEx).

// / /   -> Start and end of the Regular Expression
// \s    -> Matches any whitespace character
// g     -> Global flag (matches all occurrences)

// \s matches:
// " "  -> Space
// \t   -> Tab
// \n   -> New Line
// \r   -> Carriage Return

// =========================================================================================================

// Difference Between trim() and replace(/\s/g, "")

trim()
// Removes whitespace only from the beginning and end.

replace(/\s/g, "")
// Removes all whitespace from the entire string,
// including spaces, tabs and new lines.

// Example:

let text = " Test Leaf ";

console.log(text.trim());            // "Test Leaf"
console.log(text.replace(/\s/g, ""));// "TestLeaf"

// =========================================================================================================

// Difference Between replace(/\s/g, "") and replaceAll(" ", "")

let value = "test\tleaf test";

console.log(value.replace(/\s/g, ""));   // "testleaftest"
console.log(value.replaceAll(" ", ""));  // "test\tleaftest"

// replace(/\s/g, "")
// Removes all whitespace characters (space, tab, new line, etc.)

// replaceAll(" ", "")
// Removes only spaces (" ").

// =========================================================================================================

/*
Real-Time Example

Suppose a user enters:

" Vignesh "

Expected Value:
"Vignesh"

Without trim():

expected == actual
// false

With trim():

expected == actual.trim()
// true

This avoids unnecessary test failures caused by accidental spaces.

============================================================================================================

Interview Answer

trim() is a JavaScript string method used to remove leading and trailing
whitespace from a string. It returns a new string without modifying the
original string.

In automation testing, trim() improves reliability because users often
enter accidental spaces while filling forms or search fields.

Before validating UI text, input values, database values, or API responses,
I use trim() to remove unwanted leading and trailing spaces.

This prevents false test failures and makes validations more reliable.

If I need to remove whitespace throughout the string, including spaces,
tabs, or new lines, I use replace(/\\s/g, "") instead of trim().

============================================================================================================

Important Points to Remember

1. trim() removes only leading and trailing whitespace.
2. trim() does NOT modify the original string.
3. Strings are immutable in JavaScript.
4. trim() returns a new string.
5. trim() does NOT remove spaces inside the string.
6. replace(/\\s/g, "") removes all whitespace.
7. \\s matches space, tab, new line and carriage return.
8. g means Global (replace all occurrences).
9. replaceAll(" ", "") removes only spaces.
10. Always use trim() before validating user input in automation testing.

============================================================================================================
*/