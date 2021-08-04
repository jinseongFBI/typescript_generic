"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("mark", 27);
// new Person<string>(39);
// new Person<string,number>("mark",27);
