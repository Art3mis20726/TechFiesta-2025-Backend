import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser";
import { createProxyMiddleware } from "http-proxy-middleware";
import router from "./routes/user.routes.js";
const app=express()
const proxyTarget = 'https://techfiesta-backend.onrender.com';
app.use(cors({
    origin:["https://tech-fiesta.vercel.app"],
    credentials:true
}))
app.use('/', createProxyMiddleware({
    target: proxyTarget,
    changeOrigin: true,   // If required for domain headers
  }));
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