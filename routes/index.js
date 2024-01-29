// Importing external Packages
const express = require("express");

// Creating Router
const router = express.Router();

// Request to go to Product Router
router.use("/products", require("./products"));

// Exporting module
module.exports = router;
