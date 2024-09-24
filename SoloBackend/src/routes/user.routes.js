import Router  from "express";
import { registerForm } from "../controllers/user.controllers.js";
const router =Router()
router.route("/registerForm").post(registerForm)
export default router