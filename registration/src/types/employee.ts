export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  experience: number;
  skills: string[];
}

export interface EmployeeFormValues {
  name: string;
  email: string;
  phone: string;
  department: string;
  experience: string;
  skills: string[];
}

export interface EmployeeInput {
  name: string;
  email: string;
  phone: string;
  department: string;
  experience: number;
  skills: string[];
}

export type EmployeeFormErrors = Partial<Record<keyof EmployeeFormValues, string>>;