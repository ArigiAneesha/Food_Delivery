import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://arigianeesha:Aneesha14@cluster0.mkto8.mongodb.net/food-del').then(()=>console.log("Db Connected"));
}