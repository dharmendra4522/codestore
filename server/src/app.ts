import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import authRoute from "./routes/authRoutes";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", //allow requests from this origin
  })
);

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/employees", employeeRoutes);

export default app;
