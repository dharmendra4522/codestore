// This keyword - Refers to the current context of execution. The value of 'this' depends on how a function is called and can refer to different objects in different contexts.
class Person {
    name;
    constructor(name) {
        this.name = name; // 'this' refers to the instance of the Person class being created
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`); // 'this' refers to the instance of the Person class that called the greet method
    }
}
let person1 = new Person("Alice");
person1.greet(); // Output: Hello, my name is Alice
export {};
//# sourceMappingURL=this.js.map