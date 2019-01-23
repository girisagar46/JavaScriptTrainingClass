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

// can't do
// console.log(this.person.firstName);
// because firstName is in private scope inside an object

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
        return `${this.model} model requires ${this.chargingTime} to recharge.`
    }
};
console.log(tesla.getDetails());

// console.log(this.tesla.getDetails());


function okay(that) {
    console.log(that);
    that.innerHTML = "OKAY";
}


// this inside a function
this.engine = "V8";

const clean = function () {
    console.log(`cleaning ${this.engine} engine...`);
};


// can't do this in strict mode as we've used "use strict"; at the beginning and we cannot directly use this inside a function
// clean();

// We can do this using call method
clean.call(this);
