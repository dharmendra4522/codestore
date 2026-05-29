import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', //allow requests from this origin
})); //register the cors middleware to enable CORS for all routes

app.use(express.json());

app.use("/api/employees", employeeRoutes);

export default app;