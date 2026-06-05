import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
    requireRole?: "Admin" | "User";
}

export function ProtectRoute({ children, requireRole }: ProtectedRouteProps) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    if (requireRole) {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user.role !== requireRole) {
            return <Navigate to="/login" />;
        }
    }
   
    return <>{children}</>;
}