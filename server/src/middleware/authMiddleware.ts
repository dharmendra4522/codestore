import { Request, Response, NextFunction } from "express";
import { getUserFromToken } from "../controllers/authController";

// Extend Express Request interface to include user property
declare global {
    namespace Express {
        interface Request {
            user?: {
                email: string;
                role: "Admin" | "User";
            };
        }
    }
}

// Middleware to check if the user is authenticated and has the required role
// next() is called to pass control to the next middleware or route handler if authentication is successful
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = (req.headers.authorization || "").split(" ")[1]; // here we expect the token to be sent in the Authorization header
    const user = getUserFromToken(token);
    if(!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (user.role !== "Admin" && user.role !== "User") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = {
        email: user.email,
        role: user.role,
    };
    next();
}

// Middleware factory to create middleware that checks for specific roles
export function requireRole(role: "Admin" | "User") {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }

}