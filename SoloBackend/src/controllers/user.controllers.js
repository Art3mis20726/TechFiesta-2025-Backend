import { Team } from "../models/user.models.js";
import ApiError from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";

const registerForm=asyncHandler(async(req,res)=>{
    
    const {team_name,problem_id,college,leader_name,email,mobile,place,utr}=req.body
    if(!team_name){
        throw new ApiError(400,"Team name is required")
    }
    if(!problem_id){
        throw new ApiError(400,"Problem id is required")
    }
    if(!college){
        throw new ApiError(400,"College is required")
    }
    if(!leader_name){
        throw new ApiError(400,"Leader name is required")
    }
    if(!email){
        throw new ApiError(400,"Email is required")
    }
    if(!mobile){
        throw new ApiError(400,"Mobile is required")
    }
    if(!place){
        throw new ApiError(400,"Place is required")
    }
    if(!utr){
        throw new ApiError(400,"Utr is required")
    }
    const existedTeamName=await Team.findOne({team_name})
    if(existedTeamName){
        throw new ApiError(400,"Team name already exists")
    }
    const NewTeam=await Team.create({
        team_name:team_name
        ,problem_id:problem_id
        ,college:college
        ,leader_name:leader_name
        ,email:email
        ,mobile:mobile
        ,place:place
        ,utr:utr})
    if(!NewTeam){
        throw new ApiError(400,"Error in creating the team")
    }
    return res.status(200).json(new ApiResponse(200,NewTeam,"Registration Successfull"))

})
const getTeams=asyncHandler(async(req,res)=>{
    const teams=await Team.find()
    if(!teams){
        throw new ApiError(404,"No teams found")
        }
    return res.status(200).json(new ApiResponse(200,teams,"Teams fetched successfully")
    )
})
const teamExits=asyncHandler(async(req,res)=>{
    const teamName=req.params.team_name
    if(!teamExits){
        throw new ApiError(404,"Team not found")
    }
    const teamExits=await Team.findOne({team_name:team_name})
    if(teamExits){
        return res.status(200).json(new ApiResponse(200,true,"Team name already exists"))
    }
    return res.status(200).json(new ApiResponse(200,false,"Team name does not exists"))
})
export {registerForm,getTeams,teamExits}