import Resource from "../models/Resources.js"

export const createResource = async(req,res)=>{
    try{
        const {title,url,description,category,type,tags} = req.body;
        const resource = await Resource.create({
            title,url,description,category,type,tags,user:req.user.id
        });
        return res.status(201).json({
            success:true,
            message:"Resources Created Successully",
            resource
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error While Creating Resource"
        })
    }
}
export const updateResource = async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,url,description,category,type,tags} = req.body;
        const resource = await Resource.findOneAndUpdate(
        {
            _id:id,user:req.user.id
        },
        {
            title,url,description,category,type,tags
        },
        {
            new:true
        });

            if(!resource){
                return res.status(404).json({
                    success:false,
                    message:"Resource not found"
                })
            }
        return res.status(200).json({
            success:true,
            message:"Resources Updated Successully",
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error While Creating Resource"
        })
    }
}
export const PatchResource = async(req,res)=>{
    try{
        const {id}=req.params;
        const resource = await Resource.findOneAndUpdate(
        {
            _id:id,user:req.user.id
        },
        {
            $set:req.body
        },
        {
            new:true,runValidators:true
        });

            if(!resource){
                return res.status(404).json({
                    success:false,
                    message:"Resource not found"
                })
            }
        return res.status(200).json({
            success:true,
            message:"Resources Updated Successully",
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error While Creating Resource"
        })
    }
}

export const getResource = async(req,res)=>{
    try{
        const resource = await Resource.find({user:req.user.id});
        if(!resource){
            return res.status(404).json({
                success:false,
                message:"Resource not found"
            });
        }
        return res.status(200).json({
            success:true,
            resource
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error While Fetching Resource"
        })
    }
}
export const getResourceById = async(req,res)=>{
    try{
        const {id} = req.params;
        const resource = await Resource.findOne({_id:id,user:req.user.id});
        if(!resource){
            return res.status(404).json({
                success:false,
                message:"Resource not found"
            });
        }
        return res.status(200).json({
            success:true,
            resource
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error While Fetching Resource"
        })
    }
}

export const DeleteResourceById = async(req,res)=>{
    try{
        const {id} = req.params;
        const resource = await Resource.findOneAndDelete({_id:id,user:req.user.id});
        if(!resource){
            return res.status(404).json({
                success:false,
                message:"Resource not found"
            });
        }
        return res.status(200).json({
            success:true,
            message:"Resources deleted Successfully",
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error While Deleting Resource"
        })
    }
}

export const favorite = async(req,res)=>{
    try{

        const {id} = req.params;
        const resource = await Resource.findOne({_id:id,user:req.user.id});
        if(!resource){
            return res.status(404).json({
                success:false,
                message:"Not Found"
            });
        }

        resource.favorite = !resource.favorite;
        await resource.save();

        return res.json(resource);
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error while Change the favorite"
        })
    }
}