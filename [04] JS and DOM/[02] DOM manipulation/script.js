"use strict";

setTimeout(function () {
    document.getElementById("demo").innerHTML = "Nonsense";
    document.getElementById("demo").style.color ='red';
}, 2000);

function addNewElement() {
    // create a new div element
    let newDiv = document.createElement("div");
    // and give it some content
    let newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    let currentDiv = document.getElementById("container");
    document.body.insertBefore(newDiv, currentDiv);
}

// Events

function oops(id) {
    id.innerHTML = "OOPS!";
}