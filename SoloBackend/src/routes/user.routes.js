import Router  from "express";
import { checkUtrExists, getTeams, registerForm, teamExits } from "../controllers/user.controllers.js";
const router =Router()
router.route("/registerForm").post(registerForm)
router.route("/pangs").get(getTeams
)
router.route("/teamExits/:team_name").get(teamExits)
router.route("/utrExists/:utr").get(checkUtrExists)
export default router