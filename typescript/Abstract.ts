// Abstract class - cannot be instantiated directly, but can be extended by other classes. It can contain abstract methods, which are methods that are declared but not implemented in the abstract class. The subclasses that extend the abstract class must provide an implementation for the abstract methods.

abstract class Payment{
    constructor(protected amount: number, protected account: number) {}

    getValidAmount(amount: number): boolean {
        return amount > 0;
    }

}
class Paytm extends Payment {
    constructor(amount: number, account: number) {
        super(amount, account);
    }
}

let p1 = new Paytm(1000, 1234567890);
console.log(p1);




// ===============================================

// 1. Defining the Abstract Base Template
abstract class DatabaseController {
    // Regular Method: Shared config code used by all databases
    public connect(): void {
        console.log("Establishing secure connection to the server cluster...");
    }

    // Abstract Methods: No body! Child classes MUST define how to read/write data.
    public abstract saveUser(userId: string, data: object): void;
    public abstract deleteUser(userId: string): boolean;
}

// ❌ TS Compiler Error: Cannot create an instance of an abstract class.
// const baseDb = new DatabaseController(); 

// 2. Concrete Subclass: Implementing the required blueprint
class MongoDatabase extends DatabaseController {
    
    // You must implement the abstract method 'saveUser' or TS will throw an error
    public saveUser(userId: string, data: object): void {
        console.log(`[MongoDB Engine] Writing user data for ID: ${userId} into collection.`);
    }

    // You must implement the abstract method 'deleteUser'
    public deleteUser(userId: string): boolean {
        console.log(`[MongoDB Engine] Removing document matching ID: ${userId}.`);
        return true;
    }
}

// --- Execution ---
const productionDb = new MongoDatabase();
productionDb.connect();               // ✅ Works (Inherited directly from abstract parent)
productionDb.saveUser("EMP_101", {}); // ✅ Works (Implemented by child class)