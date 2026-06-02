// const p1 = {
//   fname: "Dharmendra",
//   lname: "Vishvkarm",
//   get fullname() {
//     return this.fname + " " + this.lname;
//   },
// };

// const p2 = Object.create(p1);

// console.log(p1);
// console.log(p2.fullname);

// p2.__proto__.fname = "Rahul";

// console.log(p1);
// console.log(p2.fullname);

// Prototype chaining - prototyping is a powerful feature in JavaScript that allows objects to inherit properties and methods from other objects. This is achieved through the prototype chain, where each object has a reference to its prototype object. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

const p1 = {
  xp1: "i am inside p1",
};

const p2 = {
  xp2: "i am inside p2",
  __proto__: p1,
};

const p3 = {
  xp3: "i am inside p3",
  __proto__: p2,
};

console.log(p3.xp1);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const s1 = new Student();
console.log(s1);