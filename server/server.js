import express from "express";
import dotenv  from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import resourceRoutes from "./routes/resourceRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
const app=express();

connectDB();


app.use(express.json());
app.use(cors());


app.use("/api/auth",authRoutes);
app.use("/api/resource",resourceRoutes);

app.get("/",(req,res)=>{
    res.send("server is running");
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})