import Router  from "express";
import { getTeams, registerForm, teamExits } from "../controllers/user.controllers.js";
const router =Router()
router.route("/registerForm").post(registerForm)
router.route("/pangs").get(getTeams
)
router.route("/teamExits/:team_name").get(teamExits)
export default router