## What is *`this`*?

It is the keyword that refers to the object it belongs to.

- This has different values depending on where it is used.

    - In a method, this refers to the **owner object**.
    - Alone, this refers to the **global object**.
    - In a function, this refers to the **global object**.
    - In a function, in strict mode, this is **undefined**.
    - In an event, this refers to the **element** that received the event.
    - Methods like call(), and apply() can refer this to **any object**.

- Detailed explanation here: [https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/](https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)