"use strict";

myloop: // this acts as a loop name
for (let i = 0; i < 10; i++)
{
	if (i === 8)
	{
		break myloop;
	}

	console.log(i);
}


// https://codeburst.io/javascript-the-label-statement-a391cef4c556