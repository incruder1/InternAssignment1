import express from "express";
import { requireSignIn } from "../Middlewares/authMiddlewares.js";
import {createTask, allUsersTasks, updateTask,deleteTask } from "../controllers/taskController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST

router.post('/create',requireSignIn,createTask);

//LOGIN || POST
router.get('/user-tasks',requireSignIn, allUsersTasks);
router.post('/update-task/:task_id',requireSignIn,updateTask);
router.post('/delete-task/:task_id',requireSignIn,deleteTask);

export default router;
