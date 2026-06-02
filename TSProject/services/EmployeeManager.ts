import { Employee } from "../models/Employee";

class EmployeeManagement {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
    console.log(`Employee ${employee.name} added successfully.`);
  }

  getEmployee(): Employee[] {
    return this.employees;
  }
}

export { EmployeeManagement };