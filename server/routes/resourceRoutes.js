import express from "express";
import { createResource,getResource,getResourceById,
    DeleteResourceById,updateResource,favorite,PatchResource } from "../controllers/resourceController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"
const app = express.Router();

app.put("/:id",authMiddleware,updateResource);
app.patch("/:id",authMiddleware,PatchResource);
app.patch("/favorite/:id",authMiddleware,favorite);
app.post("/",authMiddleware,createResource);
app.get("/",authMiddleware,getResource);
app.get("/:id",authMiddleware,getResourceById);
app.delete("/:id",authMiddleware,DeleteResourceById);


export default app;