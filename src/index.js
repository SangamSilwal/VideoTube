import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR BEFORE LISTENNING",error)
        throw error
    })
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO_DB connection Failed !!!",err);
})

































/*
import express from "express"
const app = express();
(async ()=>{
     try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log("App is listening to the Current Port")
        })
     } catch (error) {
        console.error("Error: ",error);
        throw error;
     }
})()
*/
