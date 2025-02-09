import express, { Request, Response } from "express";
import taskRoute from "./routes/taskRoute";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use("/task", taskRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
