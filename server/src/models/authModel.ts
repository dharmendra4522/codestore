export type role = "Admin" | "User";

export interface AuthModel {
  email: string;
  password: string;
  role: role;
}

export const defaultUsers: AuthModel[] = [
  {
    email: "dharm@gmail.com",
    password: "dharm123",
    role: "Admin",
  },
];
