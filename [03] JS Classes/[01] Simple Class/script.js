"use strict";

class Person
{
	constructor(name, age)
	{
        console.log("I am a constructor. I run every time an object is created.");
        console.log("Name is : " + name);
        console.log("Age is " + age);
        this.name = name;
        this.age = age;
	}

	// This is the method of Person class
	getProperty() {
		return {
			name: this.name,
			age: this.age
		}
	}

	// Static method are methods that does not require object to invoke them.
	// Trying to call this static method via an object, throws an error.
	static myStaticMethod()
	{
		console.log("Sweet!");
	}
}

let personObj = new Person("Sagar", 25);
console.log(personObj);

console.log("Person Name is " + personObj.name + " Person Age is " + personObj.age);
console.log(personObj.getProperty());

Person.myStaticMethod();

// Check if I created the valid object of valid class or not?
console.log(personObj instanceof Person); // true
console.log(personObj instanceof Number); // false