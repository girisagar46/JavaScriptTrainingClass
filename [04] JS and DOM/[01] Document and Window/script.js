"use strict";

console.log(window);
/*
Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model.
You can access it as window in most of the cases (in the browser);
*/


console.log(document);
console.log(window.document);
/*
window.document or just document is the main object of the visible (or better yet: rendered) document object model/DOM.
We can use the document object to manipulate DOM to change look and feel of a webpage
 */

// Some of the document properties

console.log(document.anchors);      // All <a> elements that have a name attribute
console.log(document.body);         // get the <body> element
console.log(document.title);        // get the <title> element
console.log(document.URL);          // get complete URL of the document