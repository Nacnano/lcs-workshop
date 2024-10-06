import express, { Request, Response } from "express";
import taskRoutes from "./routes/task";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json()); // enable JSON parsing in the request body
app.use("/task", taskRoutes); // use the task API routes

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.get("/fetch", async (req, res) => {
  const response = await fetch("https://reqres.in/api/users/2");
  const data = await response.json();
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
