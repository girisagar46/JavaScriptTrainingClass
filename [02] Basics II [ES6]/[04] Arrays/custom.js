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