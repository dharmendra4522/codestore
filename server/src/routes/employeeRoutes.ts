import { Router } from "express";
import {
  createEmployee,
  getEmployees,
  removeEmployee,
  updateEmployee,
} from "../controllers/employeeController";

const employeeRoutes = Router();

employeeRoutes.get("/", getEmployees);
employeeRoutes.post("/", createEmployee);
employeeRoutes.put("/:id", updateEmployee);
employeeRoutes.delete("/:id", removeEmployee);

export default employeeRoutes;