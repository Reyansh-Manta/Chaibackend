import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./db/index.js"
dotenv.config({
    path: './env'
})
 

connectDB()
.then(()=>{
    app.on('error', (er)=>{
        console.log("Error", er)
        process.exit(er)
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is running on port: ${process.env.PORT}`)
    })
})
.catch((e)=>{
    console.log("MongoDB connection failed", e)
    process.exit(1)
    
})










































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