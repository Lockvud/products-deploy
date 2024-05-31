import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:12345678nN112@cluster0.fm5j3k6.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
