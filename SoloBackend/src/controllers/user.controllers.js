import mongoose from "mongoose";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import {User} from "../models/user.models.js";
import ApiError from "../utils/ApiError.utils.js";
import { uploadoncloudinary } from "../utils/Cloudnary.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";

const registerUser=asyncHandler(async(req,res)=>{
    const{fullName,userName,email,password}=req.body;
    if(fullName===""){
        throw new ApiError(400,"Full name is required!")
    }
    if(userName===""){
        throw new ApiError(400,"User name name is required!")
    }
    if(email===""){
        throw new ApiError(400,"Email is required!")
    }
    if(password===""){
        throw new ApiError(400,"Password is required!")
    }
    const existeduser=await User.findOne({$or:[{email},{userName}]})
    if(existeduser){
        throw new ApiError(409,"User is already Registered")
    }


    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImage[0]?.path;




    if(!avatarLocalPath|| !coverImageLocalPath){
        throw new ApiError(400,"Avatar and CoverImage files are required")
    }
    const avatar=await uploadoncloudinary(avatarLocalPath);
    const coverImage=await uploadoncloudinary(coverImageLocalPath);
    if(!avatar.url||!coverImage.url){
        throw new ApiError(400,"Error in uploading on cloudinary!")
    }
    const user=await User.create({fullName,userName,password,email,avatar:avatar.url,coverImage:coverImage.url})
    const userCreated =await User.findById(user._id).select("-password -refreshToken")
    if(!userCreated){
        throw new ApiError(500,"Something went wrong while creating the user")
    }
    return res.
    status(200).
    json(new ApiResponse(200,userCreated,"User Registered Successfully"))



})

export{registerUser}