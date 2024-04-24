import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Avi:Avi231189@cluster0.htz6ohf.mongodb.net/food-del').then(() => {
        console.log("Db connected");
    });
}