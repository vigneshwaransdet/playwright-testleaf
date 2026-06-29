/*
Q3. How does trim() improve reliability in form input automation?
*/

// trim() removes whitespace from both ends (leading and trailing) of a string
// and returns a new string without modifying the original string.

const cname = " Testleaf ";

const trimmedName = cname.trim();

console.log(trimmedName); // Testleaf


//------------------------------------------------------
// How to remove whitespace in between the string
//------------------------------------------------------

let comname = "t e s t le a f";

let trimmedComname = comname.replace(/\s/g, '');
// string.replace(pattern, replacement)
// /g is the Global flag in Regular Expression.

console.log(trimmedComname); // testleaf


let compName = "t e s t o p 1";

let trimmedCompName = compName.replace(/\s/g, '');

console.log(trimmedCompName); // testop1


let compName1 = "t e s t i u 1";

let trimmedCompName1 = compName1.replace(" ", '');

console.log(trimmedCompName1); // test i u 1
// Only the first space is removed.


let compName2 = "t e s t i o 2";

let trimmedCompName2 = compName2.replace(/\s/g, '');

console.log(trimmedCompName2); // testio2


let compName3 = "t e s t i u 2";

let trimmedCompName3 = compName3.replace(" ", '');

console.log(trimmedCompName3); // test i u 2
// Only the first space is removed.



/*
Regular Expression (RegEx)
--------------------------

Syntax:

/pattern/flags

Example:

/\s/g

pattern -> \s
flag    -> g (Global flag - replaces all matching occurrences)

The forward slashes ( / / ) indicate a Regular Expression.

A Regular Expression is a pattern used to search or match characters in a string.

Common RegEx Characters

" "  -> space
\t   -> tab
\n   -> new line
\r   -> carriage return
\d   -> digit (0-9)
\w   -> word character (A-Z, a-z, 0-9, _)
\s   -> whitespace (space, tab, newline, etc.)

The backslash (\) is an escape character.
*/


/*
Difference between replace(/\s/g, '') and replaceAll(" ", "")
--------------------------------------------------------------

let text = "test\tleaf";

text.replace(/\s/g, '');
// Output: testleaf

text.replaceAll(" ", "");
// Output: test\tleaf (tab remains)

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
How trim() improves reliability in Test Automation
--------------------------------------------------

User input or UI text may contain unwanted leading or trailing spaces.

Using trim() before validation prevents false failures during assertions.

Example:
Expected : "Testleaf"
Actual   : " Testleaf "

Without trim():
"Testleaf" === " Testleaf "   // false

With trim():
"Testleaf" === " Testleaf ".trim()   // true

This improves the reliability of automation scripts by ensuring
extra spaces do not cause test failures.
*/