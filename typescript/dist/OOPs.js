// // Classes- It is a blueprint for creating objects. It encapsulates data and functions that operate on that data. In TypeScript, you can define classes with properties, methods, and constructors.
// class Airpod{
//     price = 2500;
//     company = "Apple";
//     color = "White";
//     volume = 20;
//     playMusic(){
//         console.log("Playing music...");
//     }
//     switchMode(mode: string){
//         console.log(`Switching to ${mode} mode...`);
//     }
//     increaseVolume(){
//         this.volume++;
//         console.log(`Volume increased to ${this.volume}`);
//     }
// }
// let myAirpod = new Airpod();
// myAirpod.playMusic();
// myAirpod.increaseVolume();
// class Food{
//     price = 1200;
//     eat(){
//         console.log("Eating food...");
//     }
// }
// class Mithai extends Food{
//     name = "Rasgulla";
// }
// let mithai1 = new Mithai();
// mithai1.eat();
// Constructor- It is a special method that is called when an object is instantiated. It is used to initialize the properties of the class.
class PenDrive {
    company;
    price;
    constructor(company, price) {
        this.company = company;
        this.price = price;
    }
}
let p1 = new PenDrive("Sandisk", 1200);
let p2 = new PenDrive("HP", 1500);
console.log(p1);
console.log(p2);
// Access Modifiers- They are keywords that determine the accessibility of class members. TypeScript provides three access modifiers: public, private, and protected. By default, all class members are public.
class Person {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
let person1 = new Person("John", 30, "a@gmail.com");
// Access Modifiers- They are keywords that determine the accessibility of class members. TypeScript provides three access modifiers: public, private, and protected. By default, all class members are public.
// Public - It means that the class member can be accessed from anywhere. In the above example, the properties name, age, and email are public, so they can be accessed from outside the class.
// Private - It means that the class member can only be accessed within the class. If you try to access a private member from outside the class, you will get an error.
// Protected - It means that the class member can be accessed within the class and its subclasses. If you try to access a protected member from outside the class or its subclasses, you will get an error.
class User {
    balance = 50000;
    username = "user123";
    getBalance() {
        console.log(this.balance);
    }
    setBalance(amount) {
        this.balance = amount;
    }
    getUsername(name = this.username) {
        console.log(this.username);
    }
}
class Admin extends User {
    getUsername(name = this.username) {
        console.log(this.username);
    }
}
let u1 = new User();
u1.getBalance();
u1.setBalance(200);
u1.getBalance();
let admin1 = new Admin();
admin1.getUsername("admin123");
// Readonly Properties- They are properties that can only be assigned a value once. Once a value is assigned to a readonly property, it cannot be changed. This is useful for properties that should not be modified after they are initialized.
class Abcd {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let obj1 = new Abcd("John");
obj1.getName();
// obj1.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
// Getters and Setters- They are special methods that allow you to get and set the values of class properties. Getters are used to retrieve the value of a property, while setters are used to modify the value of a property.
class Emp {
    username;
    constructor(username) {
        this.username = username;
        this.username = username;
    }
    get name() {
        return this.username;
    }
    set name(name) {
        this.username = name;
    }
}
let emp1 = new Emp("emp123");
console.log(emp1.name);
emp1.name = "emp456";
console.log(emp1.name);
export {};
//# sourceMappingURL=OOPs.js.map