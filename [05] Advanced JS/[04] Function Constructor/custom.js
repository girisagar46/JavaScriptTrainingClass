"use strict";

let anonFunc = () =>
{
	console.log("Hello World");
};

// We can also construct function like this
let anonFuncConstructor = new Function("x", "y", "console.log(x * y);");

anonFunc();
anonFuncConstructor(5, 6);