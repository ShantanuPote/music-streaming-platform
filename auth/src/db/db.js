import mongoose from "mongoose"
import config from "../config/config.js"

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db")
    }catch(error){
        console.log("Error connecting to database", error)
    }
}

export default  connectDB;