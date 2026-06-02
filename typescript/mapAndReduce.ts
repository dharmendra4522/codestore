interface Employee {
  namd: string;
  salary: number;
}

const employees: Employee[] = [
  { namd: "Alice", salary: 50000 },
  { namd: "Bob", salary: 60000 },
  { namd: "Charlie", salary: 55000 },
];

// Map: Extract the salaries of all employees
const empName = employees.map((employee) => employee.namd);
console.log(empName); // Output: ["Alice", "Bob", "Charlie"]

// Reduce: Calculate the total salary of all employees
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(totalSalary); // Output: 165000

// Map Vs Reduce: Map is used to transform each element of an array, while Reduce is used to accumulate a single value from an array. In this example, we used Map to extract the names of the employees and Reduce to calculate the total salary.