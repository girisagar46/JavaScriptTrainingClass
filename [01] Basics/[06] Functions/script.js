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