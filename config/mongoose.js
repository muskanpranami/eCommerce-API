// Importing Mongoose
const mongoose = require("mongoose");

// Creating DB in MongoDB Compass
const db = "mongodb://127.0.0.1:27017/ecommApi";

//  Setting the connection to the Database using Promises
mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful !!");
  })
  .catch((err) => {
    console.log("Error in connecting with Database: ", +err);
  });
