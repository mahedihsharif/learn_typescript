"use strict";
//normal object
const user = {
    name: "sharif",
    age: 27,
    isMarried: false,
};
//value type object
const user2 = {
    name: "Hello Bangladesh",
    age: 27,
    isMarried: false,
};
//another method
//value type object
const user3 = {
    name: "Hello Bangladesh",
    age: 27,
    isMarried: false,
};
user3.name = "Hello Comilla"; //you can write this value because it's only read value
const person = {
    name: "John",
    age: 30,
    salary: 1000,
    addSalary: function (money) {
        return this.salary + money;
    },
};
const add = (a, b) => a + b;
