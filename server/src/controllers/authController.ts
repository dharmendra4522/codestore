import { Request, Response } from "express";
import { AuthModel, defaultUsers } from "../models/authModel";

export function login(request: Request, response: Response) {
  console.log("Body:", request.body);
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }
  const isValidUser =
    email === defaultUsers[0].email && password === defaultUsers[0].password;

  if (!isValidUser) {
    return response.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  console.log("Before Success Response");

  return response.json({
    success: true,
    message: "Login successful",
    user: {
      email: defaultUsers[0].email,
    },
  });
}

export function logout(_request: Request, response: Response) {
  return response.json({
    success: true,
    message: "Logout successful",
  });
}

export function me(_request: Request, response: Response) {
  return response.json({
    success: true,
    user: {
      email: defaultUsers[0].email,
    },
  });
}
