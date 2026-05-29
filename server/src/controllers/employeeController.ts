import type { Request, Response } from "express";
import {
  createEmployeeRecord,
  deleteEmployeeRecord,
  listEmployees,
  updateEmployeeRecord,
} from "../models/employee";

function parseId(rawValue: string | string[]) {
  const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function normalizeInput(body: Request["body"]) {
  return {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    department: String(body.department ?? ""),
    experience: Number(body.experience ?? 0),
    skills: Array.isArray(body.skills)
      ? body.skills.map((skill: unknown) => String(skill))
      : [],
  };
}

export function getEmployees(_request: Request, response: Response) {
  response.json(listEmployees());
}

export function createEmployee(request: Request, response: Response) {
  const payload = normalizeInput(request.body);

  if (!payload.name.trim() || !payload.email.trim()) {
    return response.status(400).json({ message: "Name and email are required." });
  }

  const employee = createEmployeeRecord(payload);
  return response.status(201).json(employee);
}

export function updateEmployee(request: Request, response: Response) {
  const employeeId = parseId(request.params.id);

  if (employeeId === null) {
    return response.status(400).json({ message: "Invalid employee id." });
  }

  const payload = normalizeInput(request.body);
  const updated = updateEmployeeRecord(employeeId, payload);

  if (!updated) {
    return response.status(404).json({ message: "Employee not found." });
  }

  return response.json(updated);
}

export function removeEmployee(request: Request, response: Response) {
  const employeeId = parseId(request.params.id);

  if (employeeId === null) {
    return response.status(400).json({ message: "Invalid employee id." });
  }

  const removed = deleteEmployeeRecord(employeeId);

  if (!removed) {
    return response.status(404).json({ message: "Employee not found." });
  }

  return response.json({ message: "Employee deleted successfully." });
}