// Importing external Packages
const express = require("express");

// Creating Router
const router = express.Router();

// Importing COntroller
const productController = require("../controllers/productController");

// Post request for creating new products
router.post("/create", productController.createProduct);

// Get Request to get all the products
router.get("/", productController.products);

// Post request to update the quantity
router.post("/:id/update_quantity", productController.update);

//Delete request to Delete a product
router.delete("/:id", productController.delete);

// Exporting the module
module.exports = router;
