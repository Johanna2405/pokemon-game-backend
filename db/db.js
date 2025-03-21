import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
} catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
}