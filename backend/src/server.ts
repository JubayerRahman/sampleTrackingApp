import express from "express"
import app from "./app"
const port = process.env.PORT || 5000
import { config } from "dotenv";
import mongoose from "mongoose";

config()

const ConnectiongDB = async()=>{
    const localUri = "mongodb://localhost:27017/carStore"
    await mongoose.connect( process.env.uri as string);
    console.log("DB is connected"); 
}

ConnectiongDB()

app.listen(port, ()=>{console.log("Server is running")})