In normal JS, you can do like this:

```js
x = 10;
console.log(x);
```

This runs successfully and does not throws any error. 

But, if you want some strict rule that indicates that a variable must be declared and defined at first to use it. 
Then you can use a directive called `'use sctict';`

Example:

```js
"use strict";

x = 10;  // This will throw and error in JS console
console.log(x);
```