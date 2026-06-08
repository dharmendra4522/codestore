// ENUM - A way to define a set of named constants. Enums can be numeric or string-based.
var userRole;
(function (userRole) {
    userRole["Admin"] = "Admin";
    userRole["User"] = "User";
    userRole["Guest"] = "Guest";
})(userRole || (userRole = {}));
// Usage
let currentUserRole = userRole.Admin;
console.log(`Current user role is: ${currentUserRole}`); // Output: Current user role is: Admin 
// Any - A type that can hold any value. It is a way to opt-out of type checking.
let randomValue = 42;
console.log(`Random value is: ${randomValue}`); // Output: Random value is: 42
// Void - A type that represents the absence of a value. It is commonly used for functions that do not return a value.
function logMessage(message) {
    console.log(`Log: ${message}`);
}
logMessage("This is a log message."); // Output: Log: This is a log message.
// undefined - A type that represents the absence of a value. It is the default value for uninitialized variables.
let uninitializedVariable;
console.log(`Uninitialized variable is: ${uninitializedVariable}`); // Output: Uninitialized variable is: undefined
// null - A type that represents the intentional absence of any object value. It is often used to indicate that a variable should not have a value.
let nullableVariable = null;
console.log(`Nullable variable is: ${nullableVariable}`); // Output: Nullable variable is: null
// Unknown - A type that represents any value, but is safer than 'any' because it requires type checking before performing operations on it.
let unknownValue = "Hello, World!";
if (typeof unknownValue === "string") {
    console.log(`Unknown value is a string: ${unknownValue}`); // Output: Unknown value is a string: Hello, World!
}
export {};
//# sourceMappingURL=enum.js.map