// store employee records
export class Employee {
    id: number;
    name: string;
    email: string;
    phone: number;
    salary: number;
    department: string;


    constructor(id: number, name: string, email: string, phone: number, salary: number, department: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.salary = salary;
        this.department = department;
    }

}

