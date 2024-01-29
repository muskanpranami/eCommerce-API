// Importing external Packages
const express = require("express");

// Importing DataBase
const db = require("./config/mongoose");

// Initializing Server
const app = express();

// Parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Request to the routes folder
app.use("/", require("./routes"));

// Listening on Port 4000
app.listen(4000, () => {
  console.log("Server is running on 4000");
});
