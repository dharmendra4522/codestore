"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeManagement {
    constructor() {
        this.employees = [];
        this.nextId = 1;
    }
    addEmployee(name, email, phone, salary, department) {
        const employee = new Employee(this.nextId++, name, email, phone, salary, department);
        this.employees.push(employee);
        return employee;
    }
}
//# sourceMappingURL=EmployeeManager.js.map