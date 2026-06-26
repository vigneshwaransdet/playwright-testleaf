/*
Q2. What is the difference between == and === in JavaScript?
*/

// =========================================================================================================

// Type Coercion
// Type Coercion means JavaScript automatically converts one data type into another before comparison or any operation.

// Examples:
console.log(Number("5"));      // 5
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Number("Hello"));  // NaN (Not a Number - conversion failed)

// =========================================================================================================

// Loose Equality (==)

// Definition:
// Compares only the values.
// If the data types are different, JavaScript performs Type Coercion before comparing.

// Examples:

console.log(5 == "5"); // true
// "5" (String) is converted to 5 (Number)
// 5 == 5 -> true

console.log(10 == "10"); // true
// "10" (String) is converted to 10 (Number)
// 10 == 10 -> true

console.log(1 == true); // true
// true (Boolean) is converted to 1 (Number)
// 1 == 1 -> true

console.log(true == 2); // false
// true (Boolean) is converted to 1 (Number)
// 1 == 2 -> false

console.log(0 == false); // true
// false (Boolean) is converted to 0 (Number)
// 0 == 0 -> true

console.log(null == undefined); // true
// Special JavaScript rule:
// null and undefined are considered equal only when using ==

// Condition becomes true because true is converted to Number 1
if (true == 1) {
    console.log("Hello");
}

// =========================================================================================================

// Strict Equality (===)

// Definition:
// Compares both the value and the data type.
// No Type Coercion is performed.

// Examples:

console.log(5 === "5"); // false
// Number !== String

console.log(10 === "10"); // false
// Number !== String

console.log(1 === true); // false
// Number !== Boolean

console.log(true === 2); // false
// Boolean !== Number

console.log(0 === false); // false
// Number !== Boolean

console.log(null === undefined); // false
// null and undefined are different data types

// Condition becomes false because Boolean and Number are different data types
if (true === 1) {
    console.log("Hello");
}

// =========================================================================================================

/*
Difference Between == and ===

== (Loose Equality)
-------------------
1. Compares only values.
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

There are two equality operators in JavaScript: == and ===.

== is called Loose Equality.
It compares values after performing Type Coercion if the data types are different.

=== is called Strict Equality.
It compares both the value and the data type without performing Type Coercion.

In real projects, I always prefer using === because it avoids implicit type conversion,
makes the code more predictable, and helps prevent unexpected bugs.

============================================================================================================

Important Interview Points

1. Type Coercion means JavaScript automatically converts one data type into another.
2. true  -> 1
3. false -> 0
4. String "5" -> Number 5
5. null == undefined -> true (Special Rule)
6. null === undefined -> false
7. Always prefer === in production code.

============================================================================================================
*/