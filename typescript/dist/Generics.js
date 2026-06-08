// Generics - allow us to create reusable components that can work with a variety of types rather than a single one. This is particularly useful when we want to create functions, classes, or interfaces that can operate on different types of data while still maintaining type safety.
function identity(arg) {
    return arg;
}
console.log(identity("Hello, Generics!")); // Output: Hello, Generics!
console.log(identity(42)); // Output: 42
// Generic classes - We can also create generic classes that can work with different types of data. This allows us to create more flexible and reusable code.
class GenericNumber {
    zeroValue;
    add;
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
function createBox(name, age, key) {
    return { name, age, key };
}
const stringBox = createBox("String Box", 1, "This is a string");
console.log(stringBox); // Output: { name: 'String Box', age: 1, key: 'This is a string' }
const numberBox = createBox("Number Box", 2, 42);
console.log(numberBox); // Output: { name: 'Number Box', age: 2, key: 42 }
// Generic classes - We can also create generic classes that can work with different types of data. This allows us to create more flexible and reusable code.
class BottleMaker {
    content;
    constructor(content) {
        this.content = content;
    }
}
let b1 = new BottleMaker("Water");
console.log(b1); // Output: Water
let b2 = new BottleMaker(500);
console.log(b2); // Output: 500 
function abcde(a, b) {
    return "hy";
}
abcde("Hello", "World"); // Output: Hello
export {};
//# sourceMappingURL=Generics.js.map