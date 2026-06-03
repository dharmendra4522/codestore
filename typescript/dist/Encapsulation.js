class Bank {
    accountHolder;
    balance;
    // Encapsulation: The balance property is private, which means it cannot be accessed directly from outside the class. This helps
    // Constructors: The constructor is used to initialize the properties of the class when an instance is created. In this case, it initializes the accountHolder and balance properties.
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    // Methods: The deposit and withdraw methods are used to modify the balance of the account. They provide a controlled way to access and modify the private balance property.
    depositMoney(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new Bank("John Doe", 1000);
console.log(`Initial balance: ${myAccount.getBalance()}`);
myAccount.depositMoney(500);
console.log(`Current balance: ${myAccount.getBalance()}`);
export {};
//# sourceMappingURL=Encapsulation.js.map