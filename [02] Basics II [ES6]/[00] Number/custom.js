/*
ES6 added the following properties to the Number object:

    EPSILON
    MIN_SAFE_INTEGER
    MAX_SAFE_INTEGER
*/


"use strict";

let i = Number(67.463098);

console.log(i);
console.log(i.toPrecision(3));
console.log(i.toString());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);


/*
New Number Methods

ES6 added 2 new methods to the Number object:

    Number.isInteger()
    Number.isSafeInteger()
*/
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));


/*
The Number.isSafeInteger() Method

A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.
*/

Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false

// Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.