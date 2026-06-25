// let firstName="Bhuvanesh"
// redeclaration is not allowed
// let firstName="Akila" // SyntaxError: Identifier 'firstName' has already been declared
// firstName="Vignesh" // reintialization is allowed
// console.log(firstName)
// console.log(empNO) // hoisting is not allowed
// let empNO=1652 // ReferenceError: Cannot access 'empNO' before initialization due to hoisting is not allowed

function print() { //body 
// local variable    
 let empAge=25 
 {
    //local variable
    let empPhone=9876543210;  // block-scoped
    console.log(empPhone) // this will print due to block-scoped
    console.log(empAge) // this will print due to block-scoped
 }
//  console.log(empPhone) //ReferenceError: empPhno is not defined due to block-scoped
}
print()