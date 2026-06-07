"use strict";
// let day='monday'
// Type 'number' is not assignable to type 'string'.
// day=90
// Note:
// These are not used in real time, we can directly handle via playwright, just for learning purpose we are doing it
//type assertion -> as
// let val1 = day as string
// let val2 = <string> day // This is not going to use in real time
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// let val3 = <number> day // This is not going to use in real time
let day = 45;
let val1 = day;
console.log(val1);
// let val2 = <number> day
