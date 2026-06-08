// Interface - A contract for the shape of an object. It defines the properties and methods that an object must have. Interfaces are used to define the structure of objects and can be implemented by classes or used to type-check objects.
function createUser(obj) {
    console.log(`Creating user: ${obj.name}, Email: ${obj.email}`);
}
createUser({ name: "John Doe", email: "john@gmail.com", password: "password123" }); // Output: Creating user: John Doe, Email:
function createAdmin(obj) {
    console.log(`Creating admin: ${obj.name}, Email: ${obj.email}, Role: ${obj.role}`);
}
createAdmin({ name: "Jane Doe", email: "john@gmail.com", password: "password123", role: "Super Admin" }); // Output: Creating admin: Jane Doe, Email:
function printPoint(point) {
    console.log(`Point coordinates: (${point.x}, ${point.y})`);
}
printPoint({ x: 10, y: 20 }); // Output: Point coordinates: (10, 20)
function printID(id) {
    console.log(`ID: ${id}`);
}
printID(123); // Output: ID: 123
printID("abc"); // Output: ID: abc
function createEmployee(obj) {
    console.log(`Creating employee: ${obj.name}, Email: ${obj.email}, Employee ID: ${obj.employeeID}`);
}
createEmployee({ name: "Alice", email: "alice@gmail.com", password: "password123", employeeID: 456 }); // Output: Creating employee: Alice, Email: alice@gmail.com, Employee ID: 456
export {};
//# sourceMappingURL=interface.js.map