import Router  from "express";
import { getTeams, registerForm } from "../controllers/user.controllers.js";
const router =Router()
router.route("/registerForm").post(registerForm)
router.route("/pangs").get(getTeams
)
export default router