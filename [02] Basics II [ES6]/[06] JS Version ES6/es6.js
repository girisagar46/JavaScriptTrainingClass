"use strict";

/*
This chapter will introduce some of the new features in ES6.

    JavaScript let
    JavaScript const
    Exponentiation (**)
    Default parameter values
    Array.find()
    Array.findIndex()
*/


// ********** The let keyword **********

// The let statement allows you to declare a variable with block scope.

var x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2 and this is the block scope
}
// Here x is 10


// ********** The const keyword **********

// The const allows us to declare constant variables (value stored in constant variables can not be changed)
// Constants are similar to let variables, except that the value cannot be changed.
var y = 10;
// Here y is 10
{
    const y = 2;
    // Here y is 2
    // Can not do this.
    // x = 4;
}
// Here y is 10


// ********** The Exponentiation Operator **********

// This is similar to Math.pow() statement.

let p = 5;
let q = p ** 2; // result is 25


// ********** Default Parameter Values **********

// ES6 allows function parameters to have default values.
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15



// ********** The isFinite() Method **********

// The global isFinite() method returns false if the argument is Infinity or NaN. Otherwise it returns true:

isFinite(10/0);       // returns false
isFinite(10/2);       // returns true


// ********** The isNaN() Method **********

// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:
console.log(isNaN("Hello"));       // returns true
console.log(isNaN(NaN));       // returns true
console.log(isNaN(10));       // returns false


// ********** Arrow Functions **********

// Arrow functions allows a short syntax for writing function expressions.
// It's like lambda in other programming languages like Python, Java
const result = (x, y) => { return x * y }; // function expression is always constant value.
console.log(result(3, 4));