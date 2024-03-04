import express from "express";
import { requireSignIn } from "../Middlewares/authMiddlewares.js";
import { createUser, getAllUsers } from "../controllers/userController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST

router.post("/create",requireSignIn, createUser);

//LOGIN || POST
router.get("/getAll",requireSignIn, getAllUsers);

export default router;
