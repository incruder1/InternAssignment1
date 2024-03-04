import express from "express";
import { requireSignIn } from "../Middlewares/authMiddlewares.js";
// import { createUser, getAllUsers } from "../controllers/userController.js";
import {createSubTask, allUsersSubTasks, updateSubTask, deleteSubTask} from "../controllers/subTaskController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/create/:task_id', requireSignIn, createSubTask);
router.get('/user-subtasks/:task_id', requireSignIn,allUsersSubTasks);
router.post('/update-subtask/:subtask_id', requireSignIn, updateSubTask);
router.post('/delete-subtask/:subtask_id', requireSignIn, deleteSubTask);


export default router;
