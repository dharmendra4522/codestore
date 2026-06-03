//  Type Assertions - A way to tell the TypeScript compiler about the type of a variable when you have more information about it than the compiler can infer. Type assertions are used to override the inferred type and provide a specific type for a variable.
// Type casting - A way to convert a variable from one type to another. It is done using the syntax `variable as type` or `<type>variable`.
// Non-null assertion operator - A way to tell the TypeScript compiler that a variable is not null or undefined, even if it cannot be determined at compile time. It is done using the syntax `variable!`.
// type Asserton
let someValue = "This is a string value";
let strLength = someValue.length;
console.log(`Length of the string: ${strLength}`); // Output: Length of the string: 22
// type casting
let anotherValue = "Another string value";
let anotherStrLength = anotherValue.length;
console.log(`Length of the another string: ${anotherStrLength}`); // Output: Length of the another string: 21
// Non-null assertion operator
function getLength(str) {
    return str.length; // Using non-null assertion operator to assert that 'str' is not null
}
console.log(`Length of the string: ${getLength("Hello, World!")}`); // Output: Length of the string: 13
export {};
// type Guards - A way to narrow down the type of a variable within a specific block of code. Type guards are used to perform runtime checks on variables and provide type information to the TypeScript compiler.
//# sourceMappingURL=typeAssertion.js.map