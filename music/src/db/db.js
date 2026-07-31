import mongoose from "mongoose";
import config from "../config/config.js"

async function connectDb(){
    console.log(config.MONGO_URI);
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected to DB")
    }catch(err){
        console.log("Error  connecting to db", err)
    }
}

export default connectDb;

