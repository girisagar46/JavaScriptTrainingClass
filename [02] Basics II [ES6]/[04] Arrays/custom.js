let cars1 = [
  "Saab",
  "Volvo",
  "BMW"
];

console.log(cars1);

let cars2 = Array("Saab", "Volvo", "BMW");
console.log(cars2);

// [04] Arrays can store variety of objects
let name = "Ram";
let birthDate = new Date("April 04, 1995");
let hobbies = ["Programming", "Watching Movies"];
let otherInfo = {
	job: "Software Engineer",
	salary: 50000
};

let personInfo = [name, birthDate, hobbies, otherInfo];
console.log(personInfo);

// Accessing
let ramHobbies = personInfo[2];
console.log(ramHobbies);

// Getting size
console.log(personInfo.length);

// New in Es6
let numbers = [4, 9, 16, 25, 29];
let just_greater_than_18 = numbers.find(function (value, index, array) {
	return value > 18;
});
console.log(just_greater_than_18);

let index_of_value_just_greater_than_18 = numbers.findIndex(function (value, index, array) {
	return value > 18;
});
console.log(index_of_value_just_greater_than_18);

console.log(numbers.findIndex((x) => x === 16));


// Other methods
let myArray = ["Hello", 45, true];

// Accessing value inside an Array
myArray[1]; // = 45

// Arrays are mutable and of variable length. We can push data into it.
myArray.push("World");
myArray.length; // = 4

// Add/Modify at specific index
myArray[3] = "Hello";

// Add and remove element from front or back end of an array
myArray.unshift(3); // Add as the first element
let someVar = myArray.shift(); // Remove first element and return it

myArray.push(3); // Add as the last element
let someVar = myArray.pop(); // Remove last element and return it

// Join all elements of an array with semicolon
let myArray0 = [32,false,"js",12,56,90];
myArray0.join(";") // = "32;false;js;12;56;90"

// Get subarray of elements from index 1 (include) to 4 (exclude)
myArray0.slice(1,4); // = [false,"js",12]

// Remove 4 elements starting from index 2, and insert there strings
// "hi","wr" and "ld"; return removed subarray
myArray0.splice(2,4,"hi","wr","ld"); // = ["js",12,56,90]
// myArray0 === [32,false,"hi","wr","ld"]