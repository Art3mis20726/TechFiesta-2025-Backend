import  app  from "./app.js";
import  ConnectDB  from "./db/index.js";
import dotenv from"dotenv"
dotenv.config({path:"./env"})
ConnectDB()
.then(() => {
    app.listen((process.env.PORT||8000),()=>{
        console.log(`Server is running at port ${process.env.PORT}`)

    })
}).catch((err) => {
    console.log("MONGODB Conncetion Failed",err)

}); 
////require("dotenv").config({path:"./env"})
