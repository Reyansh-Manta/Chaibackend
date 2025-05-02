import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import express from "express"
const app = express()
import connectDB from "../db"

connectDB()











































// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err)=>{
//             console.log("Err: ", err)
//             throw err
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port: ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("Error", error)
//         throw error
//     }
// })()