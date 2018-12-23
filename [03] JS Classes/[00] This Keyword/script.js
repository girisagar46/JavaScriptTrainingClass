"use strict";

let person = {
    firstName: "Sagar",
    lastName : "Giri",
    id       : 205,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    nice: function () {
        return this;
    }
};

console.log(person.fullName());
console.log(person.nice());

// In this case, this refers to whole window.
console.log(this);

function myFunction() {
  return this;
}

console.log(myFunction());