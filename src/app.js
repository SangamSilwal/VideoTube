import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors";


const app = express()

/*
CORS is a browser security feature that restricts
web pages from making requests to a different 
domain(origin) than the one that served the original 
web pages
*/
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser( ))
export {app }