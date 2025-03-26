import configuration from "@/configurations/configurations";
import mongoose from "mongoose";

const MONGODB_URI = configuration.mongodb_uri;

if (!MONGODB_URI) {
    throw new Error("Missing MongoDB URI in configuration.");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        connection: null,
        promise: null,
    }
}

const connectDB = async () => {
    try {
        if (cached.connection) {
            return cached.connection;
        }

        if (!cached.promise) {
            const options = {
                bufferCommands: true,
                maxPoolSize: 10,
            }

            cached.promise = mongoose.connect(MONGODB_URI, options).then(() => mongoose.connection);
        } else {
            cached.connection = await cached.promise;
        }

        console.log("MongoDB connected successfully!");
        return cached.connection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        cached.promise = null;
        throw error;
    }
}

export default connectDB;