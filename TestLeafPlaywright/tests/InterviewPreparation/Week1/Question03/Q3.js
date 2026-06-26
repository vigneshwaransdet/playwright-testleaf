/*
Q3. How does trim() improve reliability in form input automation?
*/

//trim() method removes whitespace from both ends of a string and returns a new string, without 
// modifying the original string.

const cname = " Testleaf "
const trimmedName = cname.trim() //removes leading and trailing spaces
console.log(trimmedName); // o/p->Testleaf

//how to remove white space in between the string
let comname="t e s t le a f"
let trimmedComname = comname.replace(/\s/g, '') //string.replace(pattern, replacement)->g means global search and replaces all occurance else
console.log(trimmedComname); // o/p->testleaf

let compName = "t e s t o p 1"
let trimmedCompName = compName.replace(/\s/g, '')
console.log(trimmedCompName); // o/p->testop1

let compName1 = "t e s t i u 1"
let trimmedCompName1 = compName1.replace(" ", '')
console.log(trimmedCompName1); // o/p->test i u 1 (only first space removed, rest remains)

let compName2 = "t e s t i o 2"
let trimmedCompName2 = compName2.replace(/\s/g, '') //string.replaceAll(pattern, replacement)->g means global search and replaces all occurance else
console.log(trimmedCompName2); // o/p->testio2

let compName3 = "t e s t i u 2"
let trimmedCompName3 = compName3.replace(" ", '')
console.log(trimmedCompName3); // o/p->test i u 2 (only first space removed, rest remains)

/* /\s/g -The forward slashes indicate a Regular Expression (RegEx).
A regular expression is a pattern used to search or match characters in a string.
pattern → \s
flag → g (without this flag, only the first occurrence would be replaced)

| Character | Meaning         |
| --------- | --------------- |
| `" "`     | space           |
| `\t`      | tab             |
| `\n`      | new line        |
| `\r`      | carriage return |
| `\d`      | digit           |
| `\w`      | word character  |
| `\s`      | whitespace      |
| `/ /`      | start and end of comment     |
The backslash is an escape character. 


Difference between replace(/\s/g, '') and replaceAll(" ","")
-------------------------------------------------------------

let text = "test\tleaf"
text.replace(/\s/g, '') → testleaf
text.replaceAll(" ", "") → test\tleaf (tab remains);|

// replace(/\s/g, '') removes all whitespace using regex, while replaceAll(" ", "") removes only the specified string (space) everywhere.
*/