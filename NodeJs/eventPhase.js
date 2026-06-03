// setTimeout(() =>  console.log('1'), 0);
// setTimeout(() =>  console.log('2'), 0);
// setImmediate(() =>  console.log('3'));
// setImmediate(() =>  console.log('4'));
// console.log('start');  


// Promises is a microtask, and it will be executed before the next event loop tick. So, the output of the above code will be:
//process.nextTick() is also a microtask, and it will be executed before the next event loop tick. So, the output of the above code will be:
// promise vs process.nextTick() in Node.js - 
// In Node.js, both Promise and process.nextTick() are used to schedule tasks to be executed asynchronously. However, they have different behaviors in terms of their execution order and timing.

// 1. Execution Order:
// - process.nextTick(): Tasks scheduled with process.nextTick() are executed immediately after the current operation completes, before any I/O events or timers. This means that they will be executed before any other tasks in the event loop.
// - Promise: Tasks scheduled with Promise (using .then() or .catch()) are executed in the next tick of the event loop, after all current operations and microtasks have been completed. This means that they will be executed after any tasks scheduled with process.nextTick().

// const fs = require('fs');
// fs.readFile(__filename, () => {

//     Promise.resolve(() =>  console.log('promise'));
//     process.nextTick(() =>  console.log('tick'));
// });



// eska exection order kya hoga?
// The execution order of the above code will be as follows: 
// 1. 'start' will be logged to the console immediately.
// 2. The setTimeout callback will be scheduled to run after 0 milliseconds, but it will not execute immediately. It will be placed in the timer queue.
// 3. The setImmediate callback will be scheduled to run immediately after the current event loop phase, and it will be placed in the check queue.
// 4. The Promise callback will be scheduled to run in the microtask queue, which has a higher priority than the timer and check queues.
// 5. The process.nextTick callback will also be scheduled to run in the microtask queue, and it will execute before the Promise callback because it is added to the front of the microtask queue.
// 6. 'end' will be logged to the console immediately after scheduling all the callbacks.
console.log('start');

setTimeout(() =>  console.log('timeout'), 0);
setImmediate(() =>  console.log('immediate'));
Promise.resolve().then(() =>  console.log('promise2'));
process.nextTick(() =>  console.log('tick2'));
console.log('end');