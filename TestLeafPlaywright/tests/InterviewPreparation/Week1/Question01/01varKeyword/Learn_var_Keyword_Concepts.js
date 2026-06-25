var firstName ="Bhuvanesh"
var firstName ="Akila"// redeclaration is allowed
console.log(firstName) 
firstName ="vignesh" // reinitialization is allowed
console.log(firstName) 
console.log(empNo) // hoisting is allowed
var empNo = 1234 

// keyword 
function print() { //body 
// local variable    
 var empAge=25 
 {
    //local variable
    var empPhone = 9876543210; // function-scoped
 }
 console.log(empAge) //This will not throws an error and print the output due to var keyword is function-scoped
 console.log(empPhone) //This will not throws an error and print the output due to var keyword is function-scoped
}
print()
// console.log(empAge) // this line will throw an error due to var keyword is function-scoped | ReferenceError: empPhone is not defined
// console.log(empPhone) // this line will throw an error due to var keyword is function-scoped | ReferenceError: empPhone is not defined