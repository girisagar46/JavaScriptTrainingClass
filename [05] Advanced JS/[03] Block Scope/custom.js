"use strict";

function SweetFunction()
{
	let sweetNum = 789;

	console.log(sweetNum);

	{
		let sweetNum = 800;
		console.log(sweetNum);
	}

	console.log(sweetNum);
}

SweetFunction();

/*
Output:
789
800
789
*/
