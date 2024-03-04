import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import subTaskRouter from "./routes/subTaskRoute.js";
const PORT = process.env.PORT || 8080;

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/subtasks", subTaskRouter);
 
//run listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
