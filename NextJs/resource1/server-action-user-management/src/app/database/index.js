import mongoose from "mongoose";

export const connectDB = () => {
  const dbUrl = "mongodb+srv://admin:adminPass@cluster0.yejhk.mongodb.net/";
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Database connected Successfully !!");
    })
    .catch((e) => {
      console.log("Error while connecting database:", e);
    });
};
