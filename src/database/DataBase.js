import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
// const mongoose = require("mongoose");
export const mongo = mongoose
  .connect(process.env.MONGODB_URI)

  .then(() => console.log("Connected to Mongo", "Connect"))
  .catch((err) => console.error(err, "errr:("));
