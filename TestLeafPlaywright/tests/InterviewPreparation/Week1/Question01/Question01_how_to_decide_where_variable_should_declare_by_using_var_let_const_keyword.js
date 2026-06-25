/*
Q1. How do you decide whether a variable should be declared using let or const in JavaScript?

In JavaScript, var, let, and const are all used to declare variables, but they differ in scope, reassignment, and hoisting.

var is function-scoped, can be reassigned and redeclared, and may lead to unexpected issues because of hoisting.
let is block-scoped, can be reassigned but cannot be redeclared in the same scope, making it safer than var.
const is also block-scoped, but it cannot be reassigned after declaration, so it is mainly used for values that should remain constant.

After ES6, use const by default for better code safety and readability,let only when the variable value needs to change during execution.


a) console.log(x)
   var x = 10

o/p-> undefined

Hoisting is JavaScript’s default behavior where variable declarations are moved to the top of the scope during execution.
Because var x is hoisted but the value assignment happens later

b) console.log(y)
   const/let y = 20

o/p-> ReferenceError
This happens due to TDZ (Temporal Dead Zone) — the time between variable declaration and initialization.


| Feature   | var      | let       | const     |
| --------- | -------- | --------- | --------- |
| Redeclare | Yes      | No        | No        |
| Reassign  | Yes      | Yes       | No        |
| Scope     | Function | Block     | Block     |
| Hoisting  | Yes      | Yes (TDZ) | Yes (TDZ) |

*/

