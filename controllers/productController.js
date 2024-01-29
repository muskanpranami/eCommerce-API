// Importing Schema
const Product = require("../models/productSchema");

// Module to create a new Product
module.exports.createProduct = async function (req, res) {
  try {
    let product = await Product.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      data: {
        name: product.name,
        quantity: product.quantity,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Module to get all the products
module.exports.products = async function (req, res) {
  try {
    let products = await Product.find({});
    return res.status(200).json({
      success: true,
      message: "List of Products",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Module to update quantity of a product
module.exports.update = async function (req, res) {
  try {
    let product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        quantity: req.query.quantity,
      },
      {
        new: true,
      }
    );
    console.log(product);
    return res.status(200).json({
      success: true,
      message: "Product Quantity Updated",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Module to delete a Product
module.exports.delete = async function (req, res) {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
