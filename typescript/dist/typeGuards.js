// type Guards - A way to narrow down the type of a variable within a specific block of code. Type guards are used to perform runtime checks on variables and provide type information to the TypeScript compiler. 
function abcd(arg) {
    if (typeof arg === "string") {
        console.log(`Argument is a string: ${arg}`);
    }
    else if (typeof arg === "number") {
        console.log(`Argument is a number: ${arg}`);
    }
    else {
        throw new Error("Argument is neither a string nor a number");
    }
}
abcd("Hello, TypeScript!"); // Output: Argument is a string: Hello, TypeScript!
abcd(42); // Output: Argument is a number: 42
// typeof instanceof - The `typeof` operator is used to check the type of a variable at runtime, while the `instanceof` operator is used to check if an object is an instance of a specific class or constructor function.
class TvRemote {
    switchTvoff() {
        console.log("TV is switched off");
    }
}
class CarRemote {
    switchCaroff() {
        console.log("switching off car");
    }
}
const tv = new TvRemote();
const car = new CarRemote();
function switchOffRemote(remote) {
    if (remote instanceof TvRemote) {
        remote.switchTvoff();
    }
    else if (remote instanceof CarRemote) {
        remote.switchCaroff();
    }
    else {
        throw new Error("Unknown remote type");
    }
}
switchOffRemote(tv);
switchOffRemote(car);
export {};
//# sourceMappingURL=typeGuards.js.map