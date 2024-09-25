import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser";
import router from "./routes/user.routes.js";
const app=express()
app.use(cors({
    origin:["https://tech-fiesta.vercel.app,http://localhost:5170"],
    credentials:true
}))
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())



app.use("/api/v1/users",router)
export default app