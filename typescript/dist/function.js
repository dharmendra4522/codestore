// function - A function is a block of code that performs a specific task. In TypeScript, you can define functions using the `function` keyword, and you can specify the types of parameters and return values.
// Function type - A function type is a way to describe the types of parameters and return values of a function. It is defined using the syntax `(parameter1: type1, parameter2: type2, ...) => returnType`.
function abc(name, age, cb) {
    cb("hey");
}
abc("Dharmendra", 30, (arg) => {
    console.log(`Callback message: ${arg}`);
}); // Output: Callback message: hey
// Optional parameters and default parameters - In TypeScript, you can make parameters optional by adding a `?` after the parameter name. You can also provide default values for parameters, which will be used if no value is passed when the function is called.
// Optional parameter
function abcd(name, greeting) {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
abcd("Alice"); // Output: Hello, Alice!
abcd("Bob", "Hi"); // Output: Hi, Bob!
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!
// Rest parameters - A way to represent an indefinite number of arguments as an array. It is defined using the syntax `...parameterName: type[]`.
function num(...numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`Sum of numbers: ${sum}`);
}
num(1, 2, 3); // Output: Sum of numbers: 6
num(4, 5, 6, 7); // Output: Sum of numbers: 22
// Rest Vs Spread operator - The rest operator is used in function parameters to represent an indefinite number of arguments as an array, while the spread operator is used to expand an array or object into individual elements.
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
export {};
//# sourceMappingURL=function.js.map