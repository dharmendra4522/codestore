// Asynchronous programming in JavaScript allows you to perform tasks without blocking the main thread. This is particularly useful for operations that take time, such as network requests, file I/O, or timers. One common way to handle asynchronous operations is through the use of callbacks, promises, and async/await syntax.
// Synchronous code executes in a sequential manner, meaning that each line of code waits for the previous one to finish before executing. In contrast, asynchronous code allows multiple operations to run concurrently, improving performance and responsiveness. 

console.log("before setTimeout function");
setTimeout(() => {
  console.log("This is setTimeout function");
}, 7000);

setTimeout(() => {
  console.log("This is setTimeout function");
}, 8000);

console.log("after setTimeout function");
