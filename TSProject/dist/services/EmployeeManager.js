class EmployeeManagement {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Employee ${employee.name} added successfully.`);
    }
    getEmployee() {
        return this.employees;
    }
}
export { EmployeeManagement };
//# sourceMappingURL=EmployeeManager.js.map