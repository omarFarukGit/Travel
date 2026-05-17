import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connect successfully");
  } catch (error) {
    console.log("db not conncet");
  }
};

export default connectDB;
