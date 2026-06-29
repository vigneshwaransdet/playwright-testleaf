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
// (Strings are immutable in JavaScript.)

// Syntax:

string.trim()

// =========================================================================================================

// Examples

const companyName = " Testleaf ";

const trimmedName = companyName.trim();

console.log(trimmedName); // "Testleaf"
console.log(companyName); // " Testleaf " (Original string remains unchanged)

// =========================================================================================================

// trimStart() and trimEnd()

// trimStart()
// Removes whitespace only from the beginning.

console.log(" Testleaf".trimStart()); // "Testleaf"

// trimEnd()
// Removes whitespace only from the end.

console.log("Testleaf ".trimEnd()); // "Testleaf"

// =========================================================================================================

// Why does trim() improve reliability in Automation Testing?

// Users may accidentally enter leading or trailing spaces
// while filling forms.
//
// Without trim(), validations may fail even though
// the actual value is correct.

// Example:

let expectedCompany = "Testleaf";
let actualCompany = " Testleaf ";

console.log(expectedCompany === actualCompany);         // false
console.log(expectedCompany === actualCompany.trim());  // true

// =========================================================================================================

// Removing Whitespace Inside a String

// trim() removes whitespace only from the beginning and end.
// It does NOT remove whitespace between characters.

// Example:

let company = "t e s t l e a f";

let formattedCompany = company.replace(/\s/g, "");

console.log(formattedCompany); // "testleaf"

// =========================================================================================================

// Understanding /\s/g

// /\s/g is a Regular Expression (RegEx).

// / /   -> Start and end of the Regular Expression
// \s    -> Matches any whitespace character
// g     -> Global flag (matches all occurrences)

// \s matches:
//
// " "  -> Space
// \t   -> Tab
// \n   -> New Line
// \r   -> Carriage Return

// Example:

let value = "t\te\ns t";

console.log(value.replace(/\s/g, "")); // "test"

// =========================================================================================================

// Difference Between trim() and replace(/\s/g, "")

trim()
// Removes whitespace only from the beginning and end.

replace(/\s/g, "")
// Removes ALL whitespace from the entire string,
// including spaces, tabs and new lines.

// Example:

let text = " Test Leaf ";

console.log(text.trim());             // "Test Leaf"
console.log(text.replace(/\s/g, "")); // "TestLeaf"

// =========================================================================================================

// Difference Between replace(/\s/g, "") and replaceAll(" ", "")

let text = "test\tleaf test";

console.log(text.replace(/\s/g, ""));  // "testleaftest"
console.log(text.replaceAll(" ", "")); // "test\tleaftest"

// replace(/\s/g, "")
// Removes all whitespace characters
// (space, tab, new line, carriage return).

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

expected === actual
// false

With trim():

expected === actual.trim()
// true

Using trim() prevents false test failures caused by accidental
leading or trailing spaces entered by users.

============================================================================================================

Interview Answer

trim() is a JavaScript string method that removes leading and trailing
whitespace from a string and returns a new string without modifying
the original string.

In automation testing, trim() improves reliability because users often
enter accidental spaces while filling forms or search fields.

Before validating UI text, input values, database values, or API responses,
I use trim() to remove unwanted leading and trailing spaces.

This prevents false test failures and makes validations more reliable.

If I need to remove whitespace throughout the string, including spaces,
tabs or new lines, I use replace(/\s/g, "") instead of trim().

============================================================================================================

Important Points to Remember

1. trim() removes only leading and trailing whitespace.
2. trim() returns a new string.
3. Strings are immutable in JavaScript.
4. Original string is NOT modified.
5. trim() does NOT remove whitespace inside the string.
6. trimStart() removes leading whitespace only.
7. trimEnd() removes trailing whitespace only.
8. replace(/\s/g, "") removes all whitespace.
9. \s matches space, tab, new line and carriage return.
10. g means Global (replace all occurrences).
11. replaceAll(" ", "") removes only spaces.
12. Always use trim() before validating user input in automation testing.

============================================================================================================
*/