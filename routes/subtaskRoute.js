import express from "express";
import { requireSignIn } from "../Middlewares/authMiddlewares.js";
import {createSubTask, allUsersSubTasks, updateSubTask, deleteSubTask} from "../controllers/subTaskController.js";

//router object
const router = express.Router();

//routing
//Create Route || METHOD POST
router.post('/create/:task_id', requireSignIn, createSubTask);
// Get All Users || GET
router.get('/user-subtasks/:task_id', requireSignIn,allUsersSubTasks);
// Update task
router.post('/update-subtask/:subtask_id', requireSignIn, updateSubTask);
// Delete task
router.post('/delete-subtask/:subtask_id', requireSignIn, deleteSubTask);


export default router;
