/*
Q2. What is the difference between == and === in JavScript ?
*/

/* // Loose Equality (==)
// Compares only values and performs type coercion(converting one data type to another).

// EX: 
console.log(5 == "5") // type coercion (string is getting converted to number 5 hence true)=> true
console.log(10 == "10"); //type coercion (string is getting converted to number 10 hence true)=> true 
console.log(1 == true); // Loose equality : type coercion (boolean is geting converted to truthy 1 )=> true 
console.log(null == undefined); //loose equality (==) treats both as equivalent empty values by a special coercion rule=>true

//condition true and hence prints Hello
if (true == 1) {
    console.log("Hello");
}

// Strict Equality (===)
// Compares both value and datatype.

// Ex:
console.log(5 === "5") // false
console.log(10 === "10"); // false
console.log(1 === true); // false
console.log(null === undefined); // false

//condition false and hence doesnot execute the loop
if (true === 1) {
    console.log("Hello");
} */