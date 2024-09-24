import jwt from "jsonwebtoken";
import bcrypt from"bcrypt";
import mongoose from "mongoose";
const UserSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true,

    },userName:{
        type:String,
        required:true,
        unique:true
    },email:{
        type:String,
        required:true,
        unique:true
    },accesToken:{
        type:String
    },refreshToken:{
        type:String
    },password:{
        type:String,
        required:[true,"Password is required"]
    },avatar:{
        type:String,
        required:true
    },coverImage:{
        type:String,
        required:true
    }
},{timestamps:true})
UserSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
    this.password= await bcrypt.hash(this.password,10)
    next()
})
UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
UserSchema.methods.generateAccessToken= function () {
    return jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email
    },process.env.ACCESS_SECRET_TOKEN,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}
UserSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,

    },process.env.REFRESH_SECRET_TOKEN,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}



export const User= mongoose.model("User",UserSchema)
