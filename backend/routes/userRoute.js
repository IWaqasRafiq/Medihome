import express from "express";
import { registeredUsers } from "../controllers/userController.js"; 

const userRouter = express.Router();

userRouter.post("/register", registeredUsers);

export default userRouter;