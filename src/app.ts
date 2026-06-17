import express from "express";
import type { Request, Response } from "express";

export const app = express();
app.use(express.json());

interface DevLogEntry {
  id: number;
  date: string;
  description: string;
}

// Mock data for development logs
let devLogs: DevLogEntry[] = [
  { id: 1, date: "2026-06-17", description: "Started the project" },
  { id: 2, date: "2026-06-17", description: "Set up the development environment" },
]; 

// GET endpoint to retrieve all development logs
app.get("/api/devlogs", (req: Request, res: Response) => {
  res.json(devLogs);
});

// POST endpoint to create a new development log entry
app.post("/api/devlogs", (req: Request, res: Response) => {
  const { date, description } = req.body;
  const newLog: DevLogEntry = {
    id: devLogs.length + 1,
    date,
    description
  };
  devLogs.push(newLog);
  res.status(201).json("New log added: " + newLog);
});

app.listen(3000, () => {
  console.log("App: Server is running on http://localhost:3000");
});