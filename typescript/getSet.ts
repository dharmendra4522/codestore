// Getter method - A method in a class that is used to retrieve the value of a property. It is defined using the 'get' keyword followed by the name of the property. The getter method allows you to access the value of a property without directly accessing the property itself.
// Setter method - A method in a class that is used to set the value of a property. It is defined using the 'set' keyword followed by the name of the property. The setter method allows you to modify the value of a property while encapsulating the logic for how the value is set.


class User{
    constructor(public name: string, public age: number) {}

    getName(): string {
        return this.name;
    }
    setAge(newAge: number): void {
        this.age = newAge;
    }
}

let u1 = new User("Dharmendra", 30);
console.log(u1);
u1.setAge(31);
console.log(u1);


// using (_) underscore to denote private properties and using getter and setter methods to access and modify those properties.
// underscore use krne se ye indicate hota hai ki ye properties private hain aur direct access nahi karni chahiye. Instead, getter and setter methods ka use karke hum in properties ko access aur modify kar sakte hain, jo encapsulation ke concept ko follow karta hai.

class UserProfile{
    constructor(public _name: string, public _age: number) {}

    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
}

let u2 = new UserProfile("Dharmendra", 30);
console.log(u2.name);
u2.name = "Dharmendra Singh";
console.log(u2.name);   
