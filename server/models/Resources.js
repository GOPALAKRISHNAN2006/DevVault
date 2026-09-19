import mongoose from "mongoose";

const Resource = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        url:{
            type:String,

        },
        description:{
            type:String
        },
        category:{
            type:String
        },
        type:{
            type:String
        },
        tags:{
            type:[String]
        },
        favorite:{
            type:Boolean,
            default:false
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    },
    {
        timestamps:true
    }
);

export default mongoose.model("Resource",Resource);