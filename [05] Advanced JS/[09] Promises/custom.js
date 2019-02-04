"use strict";

function Divide(num1, num2)
{
    return new Promise(function (resolve, reject) {
        if (num2 !== 0) {
            resolve(num1 / num2);
        }
        else {
            reject("It didn't work");
        }
    });
}

Divide(5, 5)
    .then(
        function(result) { // this is resolve function inside the promise
            console.log(result);
            return Divide(6, 7);
        },
        function(err) {	// this is reject function inside the promise
            console.log(err);
        })
    .then(
        function(result) {
            console.log(result);
        },
        function(err) {
            console.log(err);
        });
