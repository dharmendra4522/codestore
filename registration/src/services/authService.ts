import type { LoginReq, LoginResponse } from "../types/auth";

const API_BASE_URL = "http://localhost:5000/api/auth";

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload?.message || "Something went wrong");
  }
  return payload;
}

export async function login(credentials: LoginReq): Promise<LoginResponse> {
  return request<LoginResponse>(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export async function logout() {
  return request(`${API_BASE_URL}/logout`, {
    method: "POST",
  });
}

export async function me() {
  return request(
    `${API_BASE_URL}/me`,
  );
}
