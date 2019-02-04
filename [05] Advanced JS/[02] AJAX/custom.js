"use strict";

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/torvalds');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Data: ' + xhr.responseText);
        alert("Data fetched successfully! see the console");
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
