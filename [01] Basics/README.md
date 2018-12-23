# JS Coding Convention

- Coding conventions are style guidelines for programming. 
- Use the guidelines to improve **readability** and makes **code maintenance easier**. Coding convention has nothing to do with the performance.

## Variable Names

- Use camelCase for identifier names (variables and functions).
- Use CamelCase with first letter as capital for class names
- All names start with a letter.

```js
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);

function getSum(num1, num2) {
    return num1 + num2;
}
```

## Spaces Around Operators

- Always put spaces around operators ( = + - * / ), and after commas. This makes code much more readable. 

```js
var x = y + z;
var cars = ["Volvo", "Saab", "Fiat"];
```

## Code Indentation

- Use 2 spaces for indentation of code blocks instead of tabs. If you are using use tslint for linting purposes. Use **.editorconfig** to configure the IDE or code editor that you are using. 

```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

## Statement Rules

- For simple statements, always end it with a semicolon. Semicolon is forced by typescript and in JS it is not forced, but for old browser like IE, it has some consequences of not having a semicolon at the end of the statement.

```js
let values = ["Volvo", "Saab", "Fiat"];

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

- For compound statements, 
    - Put the opening bracket at the end of the first line.
    - Use one space before the opening bracket.
    - Put the closing bracket on a new line, without leading spaces.
    - Do not end a complex statement with a semicolon.

```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}


for (i = 0; i < 5; i++) {
  x += i;
} 
```

## Object Rules

- General rules for object definitions:

    - Place the opening bracket on the same line as the object name.
    - Use colon plus one space between each property and its value.
    - Use quotes around string values, not around numeric values.
    - Do not add a comma after the last property-value pair.
    - Place the closing bracket on a new line, without leading spaces.
    - Always end an object definition with a semicolon.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

```
- Short objects can be written compressed, on one line, using spaces only between properties:

```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

## Code line length

- Your line of code should not be longer than 80 characters.


## Naming Conventions

- Always use the same naming convention for all your code. For example:

    - Variable and function names written as camelCase
    - Global variables written in UPPERCASE (We don't, but it's quite common)
    - Constants (like PI) written in UPPERCASE

## Loading JavaScript in HTML

Use simple syntax for loading external scripts (the type attribute is not necessary):

```html
<script src="myscript.js"></script>
```

## Filename Convention

- Always use lower case letters to name your file.
- Filename extension ends with **.js**

---

Source: [https://www.w3schools.com/js/js_conventions.asp](https://www.w3schools.com/js/js_conventions.asp)