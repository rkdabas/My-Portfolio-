import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "PORTFOLIO",
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(`some error occured while connecting to DB:${err}`);
    });
};

export default dbConnection;
