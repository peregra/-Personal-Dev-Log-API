import express from "express";
export const app = express();
app.use(express.json());
// Mock data for development logs
let devLogs = [
    { id: 1, date: "2026-06-17", description: "Started the project" },
    { id: 2, date: "2026-06-17", description: "Set up the development environment" },
];
// GET endpoint to retrieve all development logs
app.get("/api/devlogs", (req, res) => {
    res.json(devLogs);
});
// POST endpoint to create a new development log entry
app.post("/api/devlogs", (req, res) => {
    const { date, description } = req.body;
    const newLog = {
        id: devLogs.length + 1,
        date,
        description
    };
    devLogs.push(newLog);
    res.status(201).json("New log added: " + newLog);
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
//# sourceMappingURL=app.js.map