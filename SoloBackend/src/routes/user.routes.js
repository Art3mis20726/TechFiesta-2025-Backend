import Router  from "express";
import {upload} from "../multiwares/multer.multiwares.js";
import {registerUser} from "../controllers/user.controllers.js";
const router =Router()
router.route("/register").post(
    upload.fields([{
        name:"avatar",
        maxCount:1
    },{
        name:"coverImage",
        maxCount:1
    }]),//two objects because avatar and coverimage is required so
           // multiwares is used,the same name avatar should be used in frontend
    registerUser)
export default router