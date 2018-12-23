"use strict";

let op = "add";

switch (op) {
    case "add":
        add(1, 2);
        break;
    case "sub":
        sub(9, 4);
        break;
    default:
        console.log("Not recognized");
        break;
}

function add(num1, num2) {
    console.log(num1 + num2);
}

function sub(num1, num2) {
    console.log(num1 - num2);
}