import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskCount,
  getTasks,
  updateTask,
} from "../controllers/taks";

const router = Router();

/**
 * @swagger
 * tags:
 * name: Tasks
 * description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 * get:
 *    summary: Obtiene todas las tareas
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 * get:
 *  summary: Obtiene el contador total de tareas
 *  tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks/:id:
 * get:
 *  summary: Obtieneuna tarea por id
 *  tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Crea una nueva tarea
 *  tags: [Tasks]
 */
router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks/:id:
 * delete:
 *  summary: Elimina la tarea por id
 *  tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/:id:
 * put:
 *  summary: Actualiza una tarea por su id
 *  tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;
