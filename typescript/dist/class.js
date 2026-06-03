// classes - A blueprint for creating objects. It defines properties and methods that the objects created from the class will have. Classes can also have constructors, which are special methods used to initialize the properties of an object when it is created.
// Constructor - A special method in a class that is called when an object is created. It is used to initialize the properties of the object.
// constructor parameters - The parameters that are passed to the constructor when an object is created. These parameters are used to initialize the properties of the object.
// constuctor me public keyword - A shorthand syntax in TypeScript that allows you to declare and initialize properties directly in the constructor parameters. When you use the 'public' keyword in the constructor parameters, TypeScript automatically creates a property with the same name and assigns the value passed to the constructor to that property.
class bottleMaker {
    color;
    price;
    material;
    constructor(color, price, material) {
        this.color = color;
        this.price = price;
        this.material = material;
    }
}
let b1 = new bottleMaker("red", 10, "plastic");
console.log(b1);
let b2 = new bottleMaker("blue", 15, "glass");
console.log(b2);
export {};
//# sourceMappingURL=class.js.map