"use strict";

// This is a block
{
    var x = 9;
}

console.log(x);

x = "Hello World";

console.log(x);


// --------------


{
    let hello = 5;  // let is the common standard in ES6
    console.log(hello);
}

// can't do this because, using let inside a block, the scope of that variable is only inside that block
// console.log(hello);

// To declare a constant variable
const p = 10;
// p = 20; // Throws: TypeError: Assignment to constant variable.
console.log(p);