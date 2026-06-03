// Access Modifiers in TypeScript - Access modifiers are keywords that determine the accessibility of class members. TypeScript provides three access modifiers: public, private, and protected. By default, all class members are public.

// Public - Members marked as public can be accessed from anywhere. This is the default access level for class members.

// Private - Members marked as private can only be accessed within the class they are declared in. They cannot be accessed from outside the class or from subclasses.

// Protected - Members marked as protected can be accessed within the class they are declared in and by subclasses. They cannot be accessed from outside the class or by instances of the class.

// Super - The super keyword is used to call the constructor of the parent class and to access its properties and methods. It is commonly used in subclasses to initialize the properties inherited from the parent class.

class BottleMaker{
    constructor(public name: string, protected capacity: number){}
}

class WaterBottle extends BottleMaker {
    constructor(name: string, public capacity: number) {
        super(name, capacity);
    }
    getValue(){
        console.log(`Name: ${this.name}, Capacity: ${this.capacity}ml`);
    }
}

let b1 = new BottleMaker("Water Bottle", 500);
let b2 = new WaterBottle("Soda Bottle", 330);
b2.getValue();


// Optional property - A property that may or may not be present in an object. It is denoted by a question mark (?) after the property name in the interface or class definition. Optional properties allow you to create more flexible and adaptable types, as they can be omitted when creating objects of that type.

interface User {
    name: string;
    email: string;
    password: string;
    gender?: string; // Optional property
}
function createUser(obj: User): void {
    console.log(`Creating user: ${obj.name}, Email: ${obj.email}`);
}

createUser({name: "John Doe", email: "john@gmail.com", password: "password123"}); // Output: Creating user: John Doe, Email: john@gmail.com 

// readonly property - A property that can only be assigned a value once. Once a value is assigned to a readonly property, it cannot be changed. This is useful for properties that should not be modified after they are initialized.

class UserProfile{
    constructor(public readonly fname: string){ }

    changeName(newName: string) {
        // this.fname = "Doe"; // Error: Cannot assign to 'fname' because it is a read-only property.
        // this.fname = newName; // Error: Cannot assign to 'fname' because it is a read-only property.
    }
}


class Profile {
    constructor(public readonly fname: string) {
        // 🔒 Yeh line pure object ke properties ko runtime par freeze kar degi
        Object.freeze(this); 
    }

    changeName(newName: string) {
        // this.fname = "Doe"; // ❌ TS Error dikhayega
    }
}

const user = new UserProfile("Dharmendra");

// ❌ JS Strict mode me yeh line runtime par error degi aur value change nahi hone degi
user.changeName("Doe"); 
console.log(user.fname); // Keval "Dharmendra" hi rahega



