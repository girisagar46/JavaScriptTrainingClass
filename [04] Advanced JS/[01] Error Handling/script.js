"use strict";

let num1 = 9;
let num2 = 0;

try {
    if (num2 === 0) {
        throw("Zero Division Error!");
    } else {
        console.log(num1 / num2);
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("No matter what, this always runs!");
}