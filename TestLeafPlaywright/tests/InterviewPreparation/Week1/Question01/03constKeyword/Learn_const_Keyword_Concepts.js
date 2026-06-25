const firstName="Bhuvanesh"
// const firstName="Akila" // SyntaxError: Identifier 'firstName' has already been declared due to re-declaration is not allowed 

// firstName="Vignesh" // re-intialization is not allowed
// Error Logs for re-intialization:
// firstName="Vignesh" // TypeError: Assignment to constant variable.
//          ^
// TypeError: Assignment to constant variable.

// console.log(firstName) 

console.log(empNo) //ReferenceError: empNo is not defined // hoisting is not allowed
const empNo=1624

// block-scoped 
/* function print(){ // body 
// local variable    
 const empAge=25 
 {
    //local variable
    const empPhone=897979697987;  // block-scoped
 }
 console.log(empPhone) // ReferenceError: empPhno is not defined due to block-scoped
}
print() */