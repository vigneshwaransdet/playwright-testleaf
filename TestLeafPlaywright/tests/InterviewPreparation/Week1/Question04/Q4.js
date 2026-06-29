/*
Q4. What is the difference between replace() and replaceAll()?
When would you use replaceAll() in Test Automation?
*/

// replace() replaces only the first occurrence of a string.
// (Unless a global Regular Expression (/g) is used.)

let company = "Test Test Test";

let result1 = company.replace("Test", "Leaf");

console.log(result1); // Leaf Test Test


// replaceAll() replaces every occurrence of the specified string.

let result2 = company.replaceAll("Test", "Leaf");

console.log(result2); // Leaf Leaf Leaf


// replace() can also replace all occurrences using a
// Regular Expression with the global (g) flag.

let result3 = company.replace(/Test/g, "Leaf");

console.log(result3); // Leaf Leaf Leaf



//------------------------------------------------------
// Number Example
//------------------------------------------------------

let price = "1,20,000";

let cleanPrice = price.replaceAll(",", "");

console.log(cleanPrice); // 120000



//------------------------------------------------------
// String Example
//------------------------------------------------------

let text = "Test Automation is Fun";

let newText = text.replaceAll(" ", "-");

console.log(newText); // Test-Automation-is-Fun



//------------------------------------------------------
// Alphanumeric Example
//------------------------------------------------------

let orderId = "ORD-123-123-123";

let cleanOrderId = orderId.replaceAll("-", "");

console.log(cleanOrderId); // ORD123123123



//------------------------------------------------------
// Remove Special Characters
//------------------------------------------------------

let product = "PR@#123$%45!";

// [^a-zA-Z0-9]
// ^ inside [] means NOT.
// Remove everything except alphabets and numbers.

let cleanedProduct = product.replaceAll(/[^a-zA-Z0-9]/g, "");

console.log(cleanedProduct); // PR12345



//------------------------------------------------------
// Extract Only Alphabets
//------------------------------------------------------

let letters = product.replace(/[^a-zA-Z]/g, "");

console.log(letters); // PR



//------------------------------------------------------
// Extract Only Numbers
//------------------------------------------------------

let numbers = product.replace(/[^0-9]/g, "");

console.log(numbers); // 12345



//------------------------------------------------------
// Extract Only Special Characters
//------------------------------------------------------

let specials = product.replace(/[a-zA-Z0-9]/g, "");

console.log(specials); // @#$%!



/*
Regular Expression (RegEx)
--------------------------

Syntax:

/pattern/flags

Example:

/Test/g

pattern -> Test
flag    -> g (Global flag - replaces all matching occurrences)

Without g:
Only the first matching occurrence is replaced.

With g:
All matching occurrences are replaced.
*/



/*
Difference between replace() and replaceAll()
---------------------------------------------

let str = "apple apple apple";

str.replace("apple", "orange");
// Output: orange apple apple

str.replace(/apple/g, "orange");
// Output: orange orange orange

str.replaceAll("apple", "orange");
// Output: orange orange orange


replace()
---------
Replaces only the first occurrence of a string.
To replace all occurrences using a Regular Expression,
use the global (g) flag.

replaceAll()
------------
Replaces every occurrence of the specified string.

When using a Regular Expression with replaceAll(),
the Regular Expression must include the global (g) flag.

Example:

str.replaceAll(/apple/g, "orange");   // ✅ Works

str.replaceAll(/apple/, "orange");    // ❌ TypeError
*/



/*
Difference between replace(/\s/g, '') and replaceAll(" ", "")
--------------------------------------------------------------

let text = "test\tleaf test";

text.replace(/\s/g, "");
// Output: testleaftest

text.replaceAll(" ", "");
// Output: test\tleaftest (tab remains)

replace(/\s/g, '')
------------------
Removes all whitespace characters (space, tab, newline, etc.)
using a Regular Expression.

replaceAll(" ", "")
-------------------
Removes only the specified space character (" ")
throughout the string.
*/



/*
replaceAll() in Test Automation
-------------------------------

Use Case: Data Sanitization

Automation scripts often capture prices, order IDs,
phone numbers, or transaction IDs from the UI.

These values may contain:
- Currency symbols ($, ₹)
- Commas (,)
- Spaces
- Hyphens (-)
- Other special characters

Before validation or comparison,
we clean the data using replaceAll().
*/

const expectedPrice = "$1,000.50";

// Remove everything except digits and decimal point.

const cleanPrice1 = expectedPrice.replaceAll(/[^0-9.]/g, "");

console.log(cleanPrice1); // 1000.50