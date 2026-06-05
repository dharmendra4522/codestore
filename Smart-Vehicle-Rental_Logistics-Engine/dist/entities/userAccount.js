import {} from "../type/rentalTypes.js";
export class UserAccount {
    username;
    role;
    #balance; // Private field for encapsulation
    email; // Optional email field
    constructor(username, role, initialBalance, email) {
        this.username = username;
        this.role = role;
        this.#balance = initialBalance;
        if (email !== undefined) {
            this.email = email;
        }
    }
    get Balance() {
        return this.#balance;
    }
    set Balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative.");
        }
        this.#balance = amount;
    }
}
//# sourceMappingURL=userAccount.js.map