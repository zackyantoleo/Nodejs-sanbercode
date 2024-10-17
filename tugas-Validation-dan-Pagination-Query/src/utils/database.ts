import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const contt = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "Cluster0",
    });
    return "Database connected";
  } catch (error) {
    console.log(error);

    return error;
  }
};
console.log(contt);

export default contt;
