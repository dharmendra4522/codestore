// Interface - A contract for the shape of an object. It defines the properties and methods that an object must have. Interfaces are used to define the structure of objects and can be implemented by classes or used to type-check objects.

interface User{
    name: string;
    email: string;
    password: string;
    gender?: string; // Optional property
}

function createUser(obj: User): void {
    console.log(`Creating user: ${obj.name}, Email: ${obj.email}`);
}   

createUser({name: "John Doe", email: "john@gmail.com", password: "password123"}); // Output: Creating user: John Doe, Email:


// Extending interfaces - Interfaces can extend other interfaces, allowing you to create a new interface that inherits the properties and methods of the existing interface.

interface Admin extends User {
    role: string;
}

function createAdmin(obj: Admin): void {
    console.log(`Creating admin: ${obj.name}, Email: ${obj.email}, Role: ${obj.role}`);
}

createAdmin({name: "Jane Doe", email: "john@gmail.com", password: "password123", role: "Super Admin"}); // Output: Creating admin: Jane Doe, Email:

// Merged interfaces - If you declare multiple interfaces with the same name, TypeScript will merge them into a single interface. This can be useful for adding properties to an existing interface without modifying the original declaration.

// Type alias - A way to create a new name for a type. Type aliases can be used to define complex types, union types, intersection types, and more. They are often used to simplify type definitions and improve code readability.

type Point = {
    x: number;
    y: number;
}
function printPoint(point: Point): void {
    console.log(`Point coordinates: (${point.x}, ${point.y})`);
}

printPoint({x: 10, y: 20}); // Output: Point coordinates: (10, 20)

// Union type - A type that can be one of several types. It is defined using the '|' operator.
type ID = number | string;
function printID(id: ID): void {
    console.log(`ID: ${id}`);
}
printID(123); // Output: ID: 123
printID("abc"); // Output: ID: abc

// Intersection type - A type that combines multiple types into one. It is defined using the '&' operator.
type Employee = User & { employeeID: number };
function createEmployee(obj: Employee): void {
    console.log(`Creating employee: ${obj.name}, Email: ${obj.email}, Employee ID: ${obj.employeeID}`);
}
createEmployee({name: "Alice", email: "alice@gmail.com", password: "password123", employeeID: 456}); // Output: Creating employee: Alice, Email: alice@gmail.com, Employee ID: 456
