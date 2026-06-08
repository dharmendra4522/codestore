import { Request, Response } from "express";
import { AuthModel, defaultUsers } from "../models/authModel";
import { createEmployeeRecord } from "./../models/employeeModel";

// In-memory session store
type SessionUser = {
  email: string;
  role: string;
};
// here we use a Map to store session tokens and associated user info. In a real application.
const sessions = new Map<string, SessionUser>();

// function to generate a simple session token (for demonstration purposes only)
function generateSessionToken(): string {
  return Math.random().toString(36).slice(2); //slice - to remove "0." and toString(36) converts to base36 (numbers + letters)
}


// Register function
export function register(req: Request, res: Response) {
  const { email, password, name, phone, department, experience, skills } = req.body;

  const existingUser = defaultUsers.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ success: false, message: "Email already exists" });
  }

  const newUser: AuthModel = {
    email,
    password,
    role: "User",
  };
  defaultUsers.push(newUser);

  // create employee profile as well (reuse existing model)
  if (name) {
    createEmployeeRecord({
      name,
      email,
      password,
      phone: phone || "",
      department: department || "",
      experience: experience || 0,
      skills: Array.isArray(skills) ? skills : [],
    });
  }

  return res.status(201).json({ success: true, defaultUsers: { email: newUser.email, role: newUser.role }, message: "Registration successful" });

}


// Login function
// export function login(request: Request, response: Response) {
//   console.log("Body:", request.body);
//   const { email, password } = request.body;
//   if (!email || !password) {
//     return response.status(400).json({
//       success: false,
//       message: "Email and password are required",
//     });
//   }
//   const isValidUser =
//     email === defaultUsers[0].email && password === defaultUsers[0].password;

//   if (!isValidUser) {
//     return response.status(401).json({
//       success: false,
//       message: "Invalid email or password",
//     });
//   }
//   console.log("Before Success Response");

//   return response.json({
//     success: true,
//     message: "Login successful",
//     user: {
//       email: defaultUsers[0].email,
//     },
//   });
// }

export function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "email/password required" });

  const user = defaultUsers.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" }); //401 Unauthorized

  // Generate session token and store user info in session
  const token = generateSessionToken();
  sessions.set(token, { email: user.email, role: user.role });
  return res.json({ success: true, message: "Login successful", user: { email: user.email, role: user.role }, authToken: token });
}

// Logout function
export function logout(req: Request, res: Response) {
  const auth = (req.headers.authorization || "").split(" ")[1]; // here we expect the token to be sent in the Authorization header
  if (auth) sessions.delete(auth);
  return res.json({ success: true, message: "Logout successful" });
}

// Get current user info
export function me(req: Request, res: Response) {
  const auth = (req.headers.authorization || "").split(" ")[1];
  const session = auth ? sessions.get(auth) : undefined;
  if (!session) return res.status(401).json({ message: "Not authenticated" });
  return res.json({ success: true, user: session });
}


//helper function to get user info from token (used in auth middleware)
export function getUserFromToken(token?: string) {
  if (!token) return null;
  return sessions.get(token);
}