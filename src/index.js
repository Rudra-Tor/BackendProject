// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./DB/database.js";

dotenv.config({
    path: './env'
})


connectDB()
.then( () => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log("app is listening on Port: ", port);
    });
})
.catch( (err) => {
    console.log(`MongoDB Connecation Failed !!! ${err}`);
});







































/*
import express from "express"
const app = express()

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERROR: ", error)
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port ${process.env.PORT}`)
        });
        
    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
*/