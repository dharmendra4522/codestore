import { Router } from "express";
import {
  createEmployee,
  getEmployees,
  removeEmployee,
  updateEmployee,
  getMyEmployee,
} from "../controllers/employeeController";
import { authMiddleware } from "../middleware/authMiddleware";

const employeeRoutes = Router();

employeeRoutes.get("/", authMiddleware, createEmployee);
employeeRoutes.get("/", authMiddleware, getEmployees);
employeeRoutes.get("/me", authMiddleware, getMyEmployee);
employeeRoutes.put("/:id", authMiddleware, updateEmployee);
employeeRoutes.delete("/:id", authMiddleware, removeEmployee);

export default employeeRoutes;  