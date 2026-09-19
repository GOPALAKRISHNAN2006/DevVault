import {register,login,getMe} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";
const app = express.Router();

app.get("/me",authMiddleware,getMe);
app.post("/register",register);
app.post("/login",login);

export default app;