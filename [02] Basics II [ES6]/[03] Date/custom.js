"use strict";

let dateObj = new Date();

console.log(dateObj);
console.log(dateObj.getFullYear());
console.log(dateObj.toString());
console.log(dateObj.toTimeString());

console.log("--------");

let date1 = new Date('December 17, 1995 03:24:00');
console.log(date1);

let date2 = new Date('1995-12-17T03:24:00');
console.log(date2);

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0

console.log(Date.now()); // A Number representing the milliseconds elapsed since the UNIX epoch.