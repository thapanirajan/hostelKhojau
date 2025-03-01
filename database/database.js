import mongoose from "mongoose";
import { DB_URI, MONGO_COMPASS_URI } from "../config/env.js"

if (!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env file ')
}

//connect to Database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_COMPASS_URI);
        console.log("connected to database ✅");

    } catch (error) {
        console.log("error connecting to database");
        process.exit(1);
    }
}
export default connectToDatabase;