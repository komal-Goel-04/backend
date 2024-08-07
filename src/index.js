// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import {app} from "./app.js"

import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {

    app.on("error", (error) => {
        console.log("Express is not able to communicate with mongoose ", error);
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    })
    
})
.catch( (err) => {
    console.log("MongoDB connection failed !!!", err)
} )













/*import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import express from "express"
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error : ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch ( error ) {
        console.log("Error : ", error)
        throw error
    }
}) ()
*/

