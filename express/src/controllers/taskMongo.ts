import { Request, Response } from "express";
import { client } from "../database";

const tasksCollection = client.db("test").collection("tasks");

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await tasksCollection.find().toArray();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

const getTaskById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const task = await tasksCollection.findOne({ id });

    if (!task) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
};

const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const newTask = {
    id: Date.now(),
    title,
    description,
    completed: false,
  };

  try {
    await tasksCollection.insertOne(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

const updateTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await tasksCollection.findOneAndUpdate(
      { id },
      { $set: { title, description, completed } },
      { returnDocument: "after" }
    );

    if (updatedTask == null || !updatedTask.value) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(updatedTask.value);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const result = await tasksCollection.deleteOne({ id });

    if (result.deletedCount === 0) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};

const taskMongoController = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

export default taskMongoController;
