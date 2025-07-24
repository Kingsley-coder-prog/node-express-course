// express

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

start();
