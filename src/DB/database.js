import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectInstance.connection.host}`);
        console.log("Database connected successfully");
        
        
    } catch (error) {
        console.log("MongoDB connection ERROR: ", error);
        process.exit(1);
    }
}


export default connectDB