import { type UserRole } from "../type/rentalTypes.js";
export declare class UserAccount {
    #private;
    readonly username: string;
    role: UserRole;
    email?: string;
    constructor(username: string, role: UserRole, initialBalance: number, email?: string);
    get Balance(): number;
    set Balance(amount: number);
}
//# sourceMappingURL=userAccount.d.ts.map