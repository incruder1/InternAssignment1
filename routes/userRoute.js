import express from "express";
import { requireSignIn } from "../Middlewares/authMiddlewares.js";
import { createUser, getAllUsers } from "../controllers/userController.js";

//router object
const router = express.Router();

//routing
//Create Route || METHOD POST

router.post("/create",requireSignIn, createUser);

// Get All Users || GET
router.get("/getAll",requireSignIn, getAllUsers);

export default router;
