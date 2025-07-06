import mongoose from "mongoose";

const connectToDb = () => {
    const dbUrl = "mongodb+srv://admin:adminPass@cluster0.yejhk.mongodb.net/";
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => {
      console.log("error connecting to db:", error);
    });
};
export default connectToDb;