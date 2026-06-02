// Inheritance - A mechanism in TypeScript that allows a class to inherit properties and methods from another class.
class SystemUser {
    email;
    constructor(email) {
        this.email = email;
    }
    login() {
        console.log(`${this.email} has logged in.`);
    }
}
// child class that inherits from SystemUser
class AdminUser extends SystemUser {
    adminLevel;
    constructor(email, adminLevel) {
        super(email); // Call the constructor of the parent class to initialize the email property
        this.adminLevel = adminLevel;
    }
    deleteUser(userEmail) {
        console.log(`${this.email} has deleted user with email: ${userEmail}`);
    }
}
const admin = new AdminUser("dharm@gmail.com", 1);
admin.login(); // Output: "dharm@gmail.com has logged in."
admin.deleteUser("john@gmail.com"); // Output: "dharm@gmail.com has deleted user with email: john@gmail.com"
export {};
//# sourceMappingURL=Inheritance.js.map