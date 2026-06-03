// type inference - The ability of TypeScript to automatically determine the type of a variable based on its value. 

let a = 12; // TypeScript infers that 'a' is of type 12 (a literal type)
console.log(`Value of a: ${a}`); // Output: Value of a: 12

// Type annotation - A way to explicitly specify the type of a variable. This can be useful when TypeScript cannot infer the type or when you want to provide additional information about the type.

let b: number | string | boolean;

b = 42; // 'b' can be a number
console.log(`Value of b: ${b}`); // Output: Value of b: 42
b = "Hello"; // 'b' can also be a string
console.log(`Value of b: ${b}`); // Output: Value of b: Hello
b = true; // 'b' can also be a boolean
console.log(`Value of b: ${b}`); // Output: Value of b: true

// types of annotation - TypeScript supports various types of annotations, including primitive types (number, string, boolean), arrays, tuples, enums, and more complex types like interfaces and classes.

// Primitive types
let c: number = 3.14;
let d: string = "TypeScript";
let e: boolean = true;

console.log(`Value of c: ${c}`); // Output: Value of c: 3.14
console.log(`Value of d: ${d}`);
console.log(`Value of e: ${e}`); // Output: Value of e: true

// Array type annotation
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers array: ${numbers}`); // Output: Numbers array: 1,2,3,4,5   

// Tuple type annotation
let tuple: [string, number] = ["Hello", 42];
console.log(`Tuple: ${tuple}`); // Output: Tuple: Hello,42

