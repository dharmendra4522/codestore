// Inheritance - A mechanism in TypeScript that allows a class to inherit properties and methods from another class.
class SystemUser {
  constructor(public email: string) {}

  public login(): void {
    console.log(`${this.email} has logged in.`);
  }
}

// child class that inherits from SystemUser

class AdminUser extends SystemUser {
  constructor(email: string, public adminLevel: number) {
    super(email); // Call the constructor of the parent class to initialize the email property
  }

  public deleteUser(userEmail: string): void {
    console.log(`${this.email} has deleted user with email: ${userEmail}`);
  }
}

const admin = new AdminUser("dharm@gmail.com", 1);
admin.login(); // Output: "dharm@gmail.com has logged in."
admin.deleteUser("john@gmail.com"); // Output: "dharm@gmail.com has deleted user with email: john@gmail.com"
