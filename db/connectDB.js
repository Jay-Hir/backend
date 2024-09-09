import mongoose from "mongoose";

export const connectDB = async () => {

    try{
        console.log("mongo_uri: ", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error with connecting with DB: ", error.message)
        process.exit(1); // failer code 1, success code 0

    }

}