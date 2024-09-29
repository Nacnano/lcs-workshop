import { Request, Response } from "express";
import { Task } from "../models/task";
import { tasks } from "../data/task";

function getAllTasks(req: Request, res: Response) {
  res.json(tasks);
}

function getTaskById(req: Request, res: Response) {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    res.json(task);
  }
}

function createTask(req: Request, res: Response) {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
}

function updateTask(req: Request, res: Response) {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed =
      req.body.completed !== undefined ? req.body.completed : task.completed;

    res.json(task);
  }
}

function deleteTask(req: Request, res: Response) {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Task not found");
  } else {
    tasks.splice(index, 1);
    res.status(204).send();
  }
}

const taskController = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

export default taskController;
