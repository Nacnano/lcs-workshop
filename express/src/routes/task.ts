import { Router, Request, Response } from "express";
import { Task } from "../models/task";
import taskController from "../controllers/task";
import taskMongoController from "../controllers/taskMongo";

const router = Router();

let tasks: Task[] = [
  {
    id: 1,
    title: "Math Homework",
    description: "by Kru Nac",
    completed: true,
  },
  {
    id: 2,
    title: "Physics Homework",
    description: "by Kru Pew",
    completed: false,
  },
  {
    id: 3,
    title: "Computer Homework",
    description: "by Kru LCS",
    completed: false,
  },
];

router.get("/", (req: Request, res: Response) => {
  res.json(tasks);
});

router.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    res.json(task);
  }
});

router.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

router.put("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;

    res.json(task);
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Task not found");
  } else {
    tasks.splice(index, 1);
    res.status(204).send();
  }
});

// Local Data
// router.get("/", taskController.getAllTasks);
// router.get("/:id", taskController.getTaskById);
// router.post("/", taskController.createTask);
// router.put("/:id", taskController.updateTask);
// router.delete("/:id", taskController.deleteTask);

// Database
// router.get("/", taskMongoController.getAllTasks);
// router.get("/:id", taskMongoController.getTaskById);
// router.post("/", taskMongoController.createTask);
// router.put("/:id", taskMongoController.updateTask);
// router.delete("/:id", taskMongoController.deleteTask);

export default router;
