"use strict";


let uri = "my test.asp?name=ståle&car=saab";
let result = encodeURI(uri);

console.log(uri);
console.log(result);

let resultD = decodeURI(uri);

console.log(resultD);