require("dotenv").config();

// express

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

start();
