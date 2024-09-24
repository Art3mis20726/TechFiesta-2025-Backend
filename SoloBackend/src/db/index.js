import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const ConnectDB= async ()=>{
try {
    const ConnectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`Database Connection Successfully ||DB host${ConnectionInstance.connection.host}`);
} catch (error) {
    console.log("\n MONGODB CONNECTION ERROR",error)
        process.exit(1)
}
}
export default ConnectDB