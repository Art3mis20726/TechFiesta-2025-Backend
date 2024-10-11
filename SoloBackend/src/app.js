import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser";
import router from "./routes/user.routes.js";
const app=express()
app.use(cors({
    origin:['http://localhost:4000','http://localhost:5173','https://tech-fiesta.vercel.app','https://techfiesta.pict.edu'],
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