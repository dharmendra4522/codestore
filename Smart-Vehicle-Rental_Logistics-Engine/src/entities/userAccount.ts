import { type UserRole } from "../type/rentalTypes.js";

export class UserAccount{
    public readonly username: string;
    public role: UserRole;
    #balance: number;  // Private field for encapsulation
    public email?: string;  // Optional email field

    constructor(username: string, role: UserRole, initialBalance: number, email?: string){
        this.username = username;
        this.role = role;
        this.#balance = initialBalance;
        if (email !== undefined) {
            this.email = email;
        }
    }

    public get Balance(): number{
        return this.#balance;
    }

    public set Balance(amount: number){
        if(amount < 0){
            throw new Error("Balance cannot be negative.");
        }
        this.#balance = amount;
    }

}