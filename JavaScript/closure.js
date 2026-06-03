function createCounter() {
  let count = 0; // This variable is enclosed in the closure

  return {
    increment: function () {
      count++;
      console.log(` current Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(` current Count: ${count}`);
    },
  };
}

const myCounter = createCounter();
myCounter.increment(); // Output: Current Count: 1
myCounter.increment(); // Output: Current Count: 2
console.log(myCounter.count); // Output: undefined (count is not directly accessible)

