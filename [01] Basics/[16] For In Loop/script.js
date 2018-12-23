"use strict";

let myObject = {
    name: "Sagar",
    subject: ["Javascript", "Python"]
};

for (let item in myObject) {
	console.log(item + " : " + myObject[item]);
}



