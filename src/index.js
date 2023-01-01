import app from "./app.js";
import dotenv from "dotenv";

const port = process.env.PORT || 8000;
import { mongo } from "./database/DataBase.js";
// import { mongo } from "./database/DataBase.js";
dotenv.config();

async function main() {
  try {
    // const mongoose = require("mongoose");
    console.log("****", process.env.MONGODB_URI, "*****");
    app.listen(port, () => {
      console.log("Server is running on port 8000");
    });
  } catch (e) {
    console.log(e);
  }
}

main();
