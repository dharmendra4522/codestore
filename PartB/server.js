// Simple in-memory API for local development (ESM)
import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let users = [];
let nextId = 1;

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const data = req.body || {};
  const user = {
    id: nextId++,
    ...data,
  };
  users.push(user);
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`Dummy API server listening at http://localhost:${port}`);
});
