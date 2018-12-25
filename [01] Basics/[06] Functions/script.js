"use strict";

function Dialog()
{
    console.log("I am");
    console.log("Batman");
}

function Sum(num1, num2)
{
    let result = num1 + num2;
    console.log(result);
}

function SumReturn(num1, num2)
{
    return num1 + num2;
}

Dialog();
Sum(4, 7);
Sum();
console.log(SumReturn(5, 9));

let returnVar = SumReturn(2, 100);

console.log(returnVar);


/*

Write this JS into different file and link it to a HMTL file and see the output.


// "immediately-executing anonymous functions", which prevent temporary variables from leaking into the global scope.
(function(){
    let temporary = 5;
    // We can access the global scope by assigning to the "global object", which
    // in a web browser is always `window`. The global object may have a
    // different name in non-browser environments such as Node.js.
    window.permanent = 10;
})();
console.log(temporary); // raises ReferenceError
console.log(permanent); // = 10

*/



// new in ES6 (Default parameter)
function es6_sum(num1=0, num2=0) {
    return num1+num2;
}
console.log(es6_sum());

// Arrow Functions
// ES5
const p = function(x, y) {
   return x * y;
};

// ES6
const q = (x, y) => x * y;
console.log(q(1, 2));