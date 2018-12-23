"use strict";

class Person {
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

// Class Employee inherits class Person because Employee is a Person
class Employee extends Person {

    // This is constructor overriding. While overriding constructor, need to call super constructor as well
    constructor(name, age, salary)
    {
        super(name, age);
        this.salary = salary;
    }

    // Method overriding
    getProperty(){
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        }
    }
}

let e1 = new Employee("Ram", 23, 50000);
console.log(e1.getProperty());

console.log(e1 instanceof Employee);
console.log(e1 instanceof Person);
