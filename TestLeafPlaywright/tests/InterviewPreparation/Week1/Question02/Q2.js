/* /*
Q2. What is the difference between == and === in JavaScript?
*/

// Type Coercion
// Type Coercion means JavaScript automatically converts one data type into another before comparison or any operation.

// =========================================================================================================

// Loose Equality (==)
// Compares only the values.
// If the data types are different, JavaScript performs Type Coercion before comparing.

// Examples:

console.log(5 == "5"); // true -> String "5" is automatically converted to Number 5, so 5 == 5

console.log(10 == "10"); // true -> String "10" is automatically converted to Number 10, so 10 == 10

console.log(1 == true); // true -> Boolean true is automatically converted to Number 1, so 1 == 1

console.log(0 == false); // true -> Boolean false is automatically converted to Number 0, so 0 == 0

console.log(null == undefined); // true -> Special JavaScript rule: null and undefined are considered equal only when using ==

// Condition becomes true because true is converted to Number 1
if (true == 1) {
    console.log("Hello");
}

// =========================================================================================================

// Strict Equality (===)
// Compares both the value and the data type.
// No Type Coercion is performed.

// Examples:

console.log(5 === "5"); // false -> Number and String are different data types

console.log(10 === "10"); // false -> Number and String are different data types

console.log(1 === true); // false -> Number and Boolean are different data types

console.log(0 === false); // false -> Number and Boolean are different data types

console.log(null === undefined); // false -> null and undefined are different data types

// Condition becomes false because Boolean and Number are different data types
if (true === 1) {
    console.log("Hello");
}

/*
============================================================================================================

Difference Between == and ===

== (Loose Equality)
-------------------
1. Compares only the values.
2. Performs Type Coercion.
3. May produce unexpected results.
4. Less preferred in real projects.

=== (Strict Equality)
---------------------
1. Compares both value and data type.
2. Does NOT perform Type Coercion.
3. Gives predictable and reliable results.
4. Recommended in real projects.

============================================================================================================

Interview Answer

== is called Loose Equality.
It compares values after performing Type Coercion if the data types are different.

=== is called Strict Equality.
It compares both the value and the data type without performing Type Coercion.

In real projects, I always prefer using === because it avoids implicit type conversion,
makes the code more predictable, and helps prevent unexpected bugs.

============================================================================================================
 */