// function Overloading - allows us to define multiple function signatures for a single function implementation. This is useful when we want to create a function that can handle different types of input parameters and return different types of output based on those parameters.

function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: any, b?: any){
    if(typeof a === "string" && typeof b === "number"){
        return a.length + b;
    }
    if(typeof a === "string" && b === undefined){
        console.log(`Hello, ${a}!`);
    }
}

abcd("Alice");
console.log(abcd("Bob", 5)); // Output: 8
