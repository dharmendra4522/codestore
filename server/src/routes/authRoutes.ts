import { Router } from "express";

import { login, logout, me, register } from "../controllers/authController";

const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/logout", logout);
authRoute.get("/me", me);

export default authRoute;
