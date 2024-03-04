import express from "express";
import { requireSignIn } from "../Middlewares/authMiddlewares.js";
import {createTask, allUsersTasks, updateTask,deleteTask } from "../controllers/taskController.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post('/create',requireSignIn,createTask);

// Get All Users || GET
router.get('/user-tasks',requireSignIn, allUsersTasks);
// Update task
router.post('/update-task/:task_id',requireSignIn,updateTask);
// Delete task
router.post('/delete-task/:task_id',requireSignIn,deleteTask);

export default router;
