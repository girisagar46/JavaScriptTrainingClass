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


let tesla = {
    model: "S",
    chargingTime: "1 Hour 20 Minutes",
    getDetails() {
        return this.model + " model requires " + this.chargingTime + " to recharge."
    }
};
console.log(tesla.getDetails());