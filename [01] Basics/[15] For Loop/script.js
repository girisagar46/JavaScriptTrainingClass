"use strict";

for (let i = 0; i <= 100; i += 2)
{
    console.log("This is position: " + i);
}



for (let i = 0; i <= 100; i += 5)
{
    if (i === 50)
    {
        break;
        // continue;
    }

    console.log("i = " + i);
}


const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
    console.log(location);
});



