let originObj = {
  name: "Dharmendra",
  age: 30,
  address: {
    city: "Indore",
  },
};

// Shallow copy - only copies the top-level properties, nested objects are still referenced
// let shallowCopy = Object.assign({}, originObj);
// console.log("Shallow Copy:", shallowCopy);

// Shallow copy using spread operator
let shallowCopy = { ...originObj };
console.log("Shallow Copy:", shallowCopy);

originObj.address.city = "mumbai";
console.log("Original Object:", originObj);
console.log("Shallow Copy after modification:", shallowCopy);
// In the above code, modifying the nested object (address.city) in the original object also modifies it in the shallow copy, demonstrating that they reference the same nested object.

// Deep copy - creates a completely independent copy of the original object, including nested objects
let deepCopy = JSON.parse(JSON.stringify(originObj));
originObj.address.city = "delhi";
console.log("Original Object after modification:", originObj);
console.log("Deep Copy:", deepCopy);
// stringify converts the object to a JSON string, and parse converts it back to an object, effectively creating a deep copy.
