import { Request, Response, Router } from "express";
import { client } from "../database";

const tasksCollection = client.db("todolist").collection("todos");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const tasks = await tasksCollection.find().toArray();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

export default router;
