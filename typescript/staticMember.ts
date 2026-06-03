// Static Members - Static members are properties or methods that belong to the class itself rather than to instances of the class. They can be accessed without creating an instance of the class and are shared among all instances. Static members are defined using the static keyword.

class MathUtils{
    static PI: number = 3.14159;

    static calculateCircumference(radius: number): number {
        return 2 * MathUtils.PI * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateCircumference(5)); // Output: 31.4159