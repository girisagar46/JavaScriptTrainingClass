"use strict";

/*
Types of logging
 */
console.info("Info");
console.warn("Warn");
console.error("error");
console.log("log");
console.debug("Debug");
console.exception("Exception");
console.clear();

/*
Exception handling
 */

let num1 = 9;
let num2 = 0;

try {
    if (num2 === 0) {
        throw("Zero Division Error!");
    } else {
        console.log(num1 / num2);
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("No matter what, this always runs!");
}


/*
Custom Error
 */

function ZeroDivisionError(message) {
    this.name = 'ZeroDivisionError';
    this.message = message || 'Error raised with default message';
}
try {
    throw new ZeroDivisionError();
    // throw new ZeroDivisionError("Division by zero is not allowed!");
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}


/*
Catching some default exceptions
 */

try {
    dangerFunction();
} catch (e) {
    if (e instanceof ReferenceError) {
        console.error(e.message);
    } else if (e instanceof RangeError) {
        console.error(e.message);
    }
} finally {
    console.info("This is some info after executing!")
}

/*
Nesting exception
 */

try {
    try {
        throw new Error('oops');
    }
    catch (ex) {
        console.error('inner', ex.message);
        throw ex;
    }
    finally {
        console.info('logging something in inner finally block');
    }
} catch (ex) {
    console.error('outer', ex.message);
} finally {
    console.info('logging something in outer finally block');
}

