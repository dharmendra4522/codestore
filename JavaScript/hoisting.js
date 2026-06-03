// This code demonstrates function hoisting in JavaScript. The function `greet` is called before it is defined, but due to hoisting, it works without any issues.
greet();

function greet() {
  console.log("Hello, World!");
}

//var hoisting - variables declared with var are hoisted to the top of their scope, but they are not initialized until the code is executed. This means that if you try to access a variable declared with var before it is initialized, you will get undefined.

console.log(x); // undefined
var x = 10;
console.log(x); // 10

// let and const hoisting - variables declared with let and const are also hoisted to the top of their scope, but they are not initialized until the code is executed. However, they are in a "temporal dead zone" from the start of the block until the declaration is encountered. This means that if you try to access a variable declared with let or const before it is initialized, you will get a ReferenceError.
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20

