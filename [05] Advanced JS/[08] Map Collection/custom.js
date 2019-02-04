"use strict";

let language_creator = new Map();
language_creator.set("Python", "Guido Van Rossum");
language_creator.set("Java", "James Gosling");

console.log(language_creator);
console.log(language_creator.get("Python"));
console.log(language_creator.get("Java"));
console.log(language_creator.has("Java"));


let mp2 = new Map(
[
	["k1", "value1"],
	["k2", "value2"],
	["k3", "value3"]
]);

console.log(mp2.entries());

for (let i of mp2.entries()) // mp2.entries() is the MapIterator which helps to iterate map
{
	console.log(`${i[0]} - ${i[1]}`);
}