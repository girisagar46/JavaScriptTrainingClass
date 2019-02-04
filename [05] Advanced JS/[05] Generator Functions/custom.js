"use strict";


function * Favourites()
{
	let pizza = yield "What is your favourite pizza?";
	let game = yield "What is your favourite game";
	let movie = yield "What is your favourite movie";

	console.log(pizza + " " + game + " " + movie);
}

let q = Favourites();


console.log("A", q.next()); // { value: 'What is your favourite pizza?', done: false }
console.log("B", q.next("Cheese"));  // { value: 'What is your favourite game', done: false }
console.log("C", q.next("Half-Life"));   // { value: 'What is your favourite movie', done: false }
console.log("D", q.next("The Dark Knight"));  // { value: undefined, done: true }. Here done is true so generator stops here


function *  generatorFunc() {
  yield 'a';
  return 'b'; // Generator ends here.
  yield 'a'; // Will never be executed.
}

// Implementing Iterables

function * iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}

for (const val of iterableObj()) {
  console.log(val);
}