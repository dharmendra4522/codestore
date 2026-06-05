import type { Request, Response } from "express";
import {
  deleteEmployeeRecord,
  listEmployees,
  updateEmployeeRecord,
  findEmployeeByEmail,
  findEmployeeById,
} from "../models/employeeModel";

// this function is used to create a new employee record.
export const createEmployee = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phone, department, experience, skills } = req.body;

        // here we can add validation for the input data (e.g., check if email is valid, password meets criteria, etc.)
        const newEmployee = {
            id: Date.now().toString(), // Dynamic unique ID generate 
            name,
            email,
            phone,
            department,
            experience,
            skills
        };

        
        res.status(201).json({
            success: true,
            message: "Employee saved successfully.",
            data: newEmployee
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Controller functions for employee management - these functions handle the business logic for employee-related operations, such as listing employees, getting employee details, updating employee information, and deleting employee records. Each function interacts with the employee model to perform the necessary data operations and sends appropriate HTTP responses based on the outcome of those operations.
export function getEmployees(req: Request, res: Response) {
  // only admin can list all
  if (!req.user) 
    return res.status(401).json({ message: "Unauthorized" });

  if (req.user.role !== "Admin") 
    return res.status(403).json({ message: "Forbidden" }); //forbidden means user is authenticated but does not have permission to access the resource

  return res.json(listEmployees());
}

// Get own employee profile
export function getMyEmployee(req: Request, res: Response) {
  if (!req.user) 
    return res.status(401).json({ message: "Unauthorized" });

  const emp = findEmployeeByEmail(req.user.email);

  if (!emp) 
    return res.status(404).json({ message: "Not found" });

  return res.json(emp);
}
// Admin can create employee records, or user can create their own record during registration (handled in authController)
export function updateEmployee(req: Request, res: Response) {
  const employeeId = parseId(req.params.id); //parseId is a helper function to validate and parse the employee ID from the request parameters. It ensures that the ID is a positive integer and returns null if it's invalid. This helps prevent potential issues with invalid input and ensures that the subsequent operations are performed on valid employee IDs.

  if (!employeeId) 
    return res.status(400).json({ message: "Invalid id" });

  if (!req.user) 
    return res.status(401).json({ message: "Unauthorized" });

  const target = findEmployeeById(employeeId);

  if (!target) 
    return res.status(404).json({ message: "Employee not found" });

  // allow 
  
  if (req.user.role !== "Admin" && req.user.email !== target.email) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const payload = normalizeInput(req.body); //normalizeInput is a helper function that takes the raw input from the request body and normalizes it into a consistent format. It ensures that all expected fields are present and of the correct type, providing default values where necessary. This helps maintain data integrity and simplifies the processing of employee data in the updateEmployee function.

  const updated = updateEmployeeRecord(employeeId, payload);

  if (!updated) 
    return res.status(404).json({ message: "Employee not found" });

  return res.json(updated);
}

// Admin can delete any employee record, user can delete their own record (which also deletes their account and prevents future logins)
export function removeEmployee(req: Request, res: Response) {
  const employeeId = parseId(req.params.id); //params is used to access the route parameters.

  if (!employeeId) 
    return res.status(400).json({ message: "Invalid id" });

  if (!req.user) 
    return res.status(401).json({ message: "Unauthorized" });

  const target = findEmployeeById(employeeId);

  if (!target) 
    return res.status(404).json({ message: "Employee not found" });

  if (req.user.role !== "Admin" && req.user.email !== target.email) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const removed = deleteEmployeeRecord(employeeId);

  if (!removed) 
    return res.status(404).json({ message: "Employee not found" });

  return res.json({ message: "Deleted" });
}

// Helper function to parse and validate employee ID from request parameters
function parseId(rawValue: string | string[]) {
  const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

// Helper function to normalize and validate employee input data
function normalizeInput(body: Request["body"]) {
  return {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    password: String(body.password ?? ""),
    phone: String(body.phone ?? ""),
    department: String(body.department ?? ""),
    experience: Number(body.experience ?? 0),
    skills: Array.isArray(body.skills)
      ? body.skills.map((skill: unknown) => String(skill))
      : [],
  };
}
