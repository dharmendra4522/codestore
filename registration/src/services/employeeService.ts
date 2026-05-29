import type { Employee, EmployeeInput } from "../types/employee";

const API_BASE_URL = "http://localhost:5000/api/employees";

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  const payload = await response.json().catch(() => null) as T | { message?: string } | null;

  if (!response.ok) {
    const message = payload && typeof payload === "object" && "message" in payload
      ? payload.message
      : `Request failed with status ${response.status}`;

    throw new Error(message ?? `Request failed with status ${response.status}`);
  }

  return payload as T;
}

export async function getEmployees(): Promise<{ data: Employee[] }> {
  const data = await request<Employee[]>(API_BASE_URL);
  return { data };
}

export async function createEmployee(employee: EmployeeInput): Promise<{ data: Employee }> {
  const data = await request<Employee>(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  return { data };
}

export async function updateEmployee(
  id: number,
  employee: EmployeeInput,
): Promise<{ data: Employee }> {
  const data = await request<Employee>(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  return { data };
}

export async function deleteEmployee(id: number): Promise<{ data: { message: string } }> {
  const data = await request<{ message: string }>(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return { data };
}