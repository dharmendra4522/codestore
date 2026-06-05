export interface Employee {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  department: string;
  experience: number;
  skills: string[];
}

// NewEmployee type is used for creating new employee records, it omits the id field since it will be generated automatically when a new employee is created. This helps ensure that the client does not need to provide an id when creating a new employee, and it also prevents any potential conflicts with existing employee ids.
// omit - The Omit utility type in TypeScript is used to create a new type by excluding specific properties from an existing type. In this case, NewEmployee is created by omitting the "id" property from the Employee interface, which means that when creating a new employee record, the client does not need to provide an id, and it will be generated automatically by the system. This helps maintain data integrity and simplifies the process of creating new employee records.
type NewEmployee = Omit<Employee, "id">;


let employees: Employee[] = [];
let nextId = 1;

// Functions to manage employee records - these functions provide the core data operations for managing employee records, such as listing all employees, creating new employee records, updating existing employee records, deleting employee records, and finding employees by their id or email. These functions interact with the in-memory employees array to perform the necessary operations and return the appropriate results based on the input parameters.
export function listEmployees(): Employee[] {
  return employees;
}

// createEmployeeRecord is used to create a new employee record. 
export function createEmployeeRecord(payload: NewEmployee): Employee {
  const newEmployee: Employee = { id: nextId++, ...payload };
  employees.push(newEmployee);
  return newEmployee;
}

// updateEmployeeRecord is used to update an existing employee record. 
export function updateEmployeeRecord(
  id: number,
  payload: Partial<NewEmployee>
): Employee | null {
  const idx = employees.findIndex((e) => e.id === id);
  if (idx === -1) return null;
 
  employees[idx] = { ...employees[idx], ...payload };
  return employees[idx];
}


export function deleteEmployeeRecord(id: number): boolean {
  const idx = employees.findIndex((e) => e.id === id);
  if (idx === -1) return false;

  employees.splice(idx, 1);
  return true;
}


export function findEmployeeById(id: number): Employee | undefined {
  const employee = employees.find((e) => e.id === id);
  return employee || undefined;
}

export function findEmployeeByEmail(email: string): Employee | undefined {
  const employee = employees.find((e) => e.email === email);
  return employee || undefined;
}