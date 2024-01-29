// Imporing Mongoose to create Mongoose
const mongoose = require("mongoose");

// Creating Schema for Products
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Setting up to use Schema
const Product = mongoose.model("Products", productSchema);

// Exporting module
module.exports = Product;
