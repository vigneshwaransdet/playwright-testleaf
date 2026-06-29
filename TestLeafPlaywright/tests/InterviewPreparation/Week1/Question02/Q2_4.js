
/*
Q2. What is the difference between == and === in JavaScript?
*/

// =========================================================================================================

// Type Coercion
// Type Coercion means JavaScript automatically converts one data type into another
// before comparison or any operation.

// Examples:

console.log(Number("5"));      // 5
console.log(Number("100"));    // 100
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

console.log(100 == "100"); // true
// "100" (String) is converted to 100 (Number)

console.log(5 == 6); // false
// Values are different

console.log("JavaScript" == "JavaScript"); // true
// Same value

console.log("JavaScript" == "javascript"); // false
// JavaScript is case-sensitive

console.log(true == 1); // true
// true (Boolean) is converted to 1 (Number)

console.log(false == 0); // true
// false (Boolean) is converted to 0 (Number)

console.log(0 == false); // true
// false (Boolean) is converted to 0 (Number)

console.log("0" == 0); // true
// "0" (String) is converted to 0 (Number)

console.log("" == 0); // true
// Empty String ("") is converted to 0 (Number)

console.log(true == 2); // false
// true becomes 1
// 1 == 2 -> false

console.log(false == 1); // false
// false becomes 0
// 0 == 1 -> false

console.log(null == undefined); // true
// Special JavaScript rule

console.log(null == 0); // false

console.log(undefined == 0); // false

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

console.log(100 === "100"); // false
// Number !== String

console.log(5 === 5); // true
// Same value and same data type

console.log("JavaScript" === "JavaScript"); // true
// Same value and same data type

console.log("JavaScript" === "javascript"); // false
// Different values

console.log(true === 1); // false
// Boolean !== Number

console.log(false === 0); // false
// Boolean !== Number

console.log(0 === false); // false
// Number !== Boolean

console.log("0" === 0); // false
// String !== Number

console.log("" === 0); // false
// String !== Number

console.log(true === true); // true
// Same value and same data type

console.log(null === undefined); // false
// null and undefined are different data types

// Condition becomes false because Boolean and Number are different data types
if (true === 1) {
    console.log("Hello");
}

// =========================================================================================================

// Important Interview Tricky Examples

console.log(NaN == NaN); // false
// NaN (Not a Number) is never equal to any value, including itself.

console.log(NaN === NaN); // false
// Even strict equality returns false.

console.log(Number.isNaN(NaN)); // true
// Correct way to check NaN.

console.log("5" == 5); // true
// String is converted to Number.

console.log("5" === 5); // false
// String !== Number

console.log({} == {}); // false
// Objects are compared by reference, not by value.

let obj1 = {};
let obj2 = {};

console.log(obj1 == obj2); // false
// Different object references.

let obj3 = {};
let obj4 = obj3;

console.log(obj3 == obj4); // true
// Same object reference.

console.log([] == []); // false
// Arrays are compared by reference.

let arr1 = [];
let arr2 = arr1;

console.log(arr1 == arr2); // true
// Same array reference.

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

Real-Time Example

let expectedStatusCode = 200;
let actualStatusCode = "200";

expectedStatusCode == actualStatusCode
// true (String is converted to Number)

expectedStatusCode === actualStatusCode
// false (Number !== String)

In automation frameworks, always prefer === to avoid false-positive validations.

============================================================================================================

Interview Answer

JavaScript provides two equality operators: == and ===.

== is called Loose Equality.
It compares only the values.
If the data types are different, JavaScript performs Type Coercion
(automatic type conversion) before comparison.

For example:

5 == "5"      // true
// "5" (String) is converted to 5 (Number)

false == 0    // true
// false (Boolean) is converted to 0 (Number)

------------------------------------------------------------------------------------------------------------

=== is called Strict Equality.

It compares both the value and the data type.
It does NOT perform Type Coercion.

For example:

5 === "5"     // false
// Number !== String

false === 0   // false
// Boolean !== Number

------------------------------------------------------------------------------------------------------------

Type Coercion

Type Coercion means JavaScript automatically converts one data type
into another before comparison or any operation.

Examples:

"5"   -> 5
true  -> 1
false -> 0

------------------------------------------------------------------------------------------------------------

Common Interview Tricky Questions

null == undefined
// true
// Special JavaScript rule.

null === undefined
// false
// Different data types.

NaN == NaN
// false
// NaN is never equal to any value, including itself.

Number.isNaN(NaN)
// true
// Correct way to check NaN.

{} == {}
// false
// Objects are compared by reference, not by value.

[] == []
// false
// Arrays are compared by reference, not by value.

------------------------------------------------------------------------------------------------------------

Conclusion

== compares only the values and performs Type Coercion
when the data types are different.

=== compares both the value and the data type without
performing Type Coercion.

In real projects, especially in automation testing,
I always prefer using === because it provides predictable,
reliable results and helps avoid unexpected bugs or
false-positive validations.

============================================================================================================

Important Points to Remember

1. Type Coercion = Automatic type conversion.
2. true  -> 1
3. false -> 0
4. "5" -> 5
5. "0" -> 0
6. "" -> 0
7. null == undefined -> true
8. null === undefined -> false
9. 0 == false -> true
10. 0 === false -> false
11. NaN == NaN -> false
12. Number.isNaN() is used to check NaN.
13. Objects are compared by reference.
14. Arrays are compared by reference.
15. Always prefer === in production code.

============================================================================================================
*/