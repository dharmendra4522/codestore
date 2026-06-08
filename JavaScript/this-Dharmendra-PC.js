"use strict";
// `this` refers to the current object in a method or function.
// In a method, `this` is the object that owns the method.
// In a regular function, `this` is the global object (or `undefined` in strict mode).
class Emp {
    name = "Dharmendra Vishvkarm";
    getProfile() {
        console.log(`My name is ${this.name}`);
    }
}
const emp = new Emp();
emp.getProfile();
