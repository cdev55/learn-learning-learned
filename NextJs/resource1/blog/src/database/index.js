import mongoose from "mongoose";
const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://admin:adminPass@cluster0.yejhk.mongodb.net/";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Database connected Successfully"))
    .catch((error) =>
      console.log("Error while connecting to the Database: ", error)
    );
};

export default connectToDB;
