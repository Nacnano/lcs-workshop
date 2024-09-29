import express, { Request, Response } from "express";
import taskRoutes from "./routes/task";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // enable JSON parsing in the request body
app.use("/task", taskRoutes); // use the task API routes

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
