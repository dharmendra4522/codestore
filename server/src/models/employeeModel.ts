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

type NewEmployee = Omit<Employee, "id">;

let employees: Employee[] = [];
let nextId = 1;

export function listEmployees(): Employee[] {
  return employees;
}

export function createEmployeeRecord(payload: NewEmployee): Employee {
  const employee: Employee = { id: nextId++, ...payload };
  employees.push(employee);
  return employee;
}

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
