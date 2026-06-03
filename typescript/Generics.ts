// Generics - allow us to create reusable components that can work with a variety of types rather than a single one. This is particularly useful when we want to create functions, classes, or interfaces that can operate on different types of data while still maintaining type safety.

function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Hello, Generics!")); // Output: Hello, Generics!
console.log(identity<number>(42)); // Output: 42

// Generic classes - We can also create generic classes that can work with different types of data. This allows us to create more flexible and reusable code.
class GenericNumber<T>{
    zeroValue!: T
    add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
// Generic interfaces - We can define generic interfaces to describe the shape of objects that can work with different types of data. This allows us to create more flexible and reusable code while still maintaining type safety.

interface Box<T>{
    name: string;
    age: number;
    key: T;
}

function createBox<T>(name: string, age: number, key: T): Box<T> {
    return { name, age, key };
}
const stringBox = createBox<string>("String Box", 1, "This is a string");
console.log(stringBox); // Output: { name: 'String Box', age: 1, key: 'This is a string' }

const numberBox = createBox<number>("Number Box", 2, 42);
console.log(numberBox); // Output: { name: 'Number Box', age: 2, key: 42 }

// Generic classes - We can also create generic classes that can work with different types of data. This allows us to create more flexible and reusable code.

class BottleMaker<T>{
    constructor(public content: T) {}
}
let b1 = new BottleMaker<string>("Water");
console.log(b1); // Output: Water
let b2 = new BottleMaker<number>(500);
console.log(b2); // Output: 500 

function abcde<T>(a:T, b: T): T{
    return "hy" as T;
}
abcde<string>("Hello", "World"); // Output: Hello