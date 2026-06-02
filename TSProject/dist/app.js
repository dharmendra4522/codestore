import { Employee } from "./models/Employee.js";
import { EmployeeManagement } from "./services/EmployeeManager.js";
const employeeManager = new EmployeeManagement();
const emp1 = new Employee(1, "John Doe", "john@gmail.com", 1234567890, 50000, "IT");
employeeManager.addEmployee(emp1);
const employees = employeeManager.getEmployee();
console.log(employees);
//# sourceMappingURL=app.js.map