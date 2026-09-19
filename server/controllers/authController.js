import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User with this email already exist!"
            });
        }
        const saltrounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltrounds);
        const user = await User.create({
            name,email,password:hashedPassword
        });
        return res.status(201).json({
            success:true,
            message:"Registration Successfull!",user
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error while Register"
        })
    }
};

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not exists...Register Now!"
            });
        }
        const comparePassword = await bcrypt.compare(password,user.password);
        if(!comparePassword){
            return res.status(400).json({
                message:"Invalid"
            });
        }

        const token = jwt.sign(
            {
                id:user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            success:true,
            message:"Login Successfull",
            token
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error while Login..."
        })
    }
};

export const getMe = async(req,res)=>{
    try{
        const id = req.user.id;
        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not exist"
            });
        }
        return res.status(200).json({
            success:true,
            user
        });
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error while fetching user"
        })
    }
}