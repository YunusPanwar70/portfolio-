import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("MongoDb connection error:", error);
  }
};