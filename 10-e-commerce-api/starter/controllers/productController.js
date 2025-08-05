const Product = require("../models/Product");

const createProduct = async (req, send) => {
  res.send("create product");
};
const getAllProducts = async (req, send) => {
  res.send("get all product");
};
const getSingleProduct = async (req, send) => {
  res.send("get single product");
};
const updateProduct = async (req, send) => {
  res.send("update product");
};
const deleteProduct = async (req, send) => {
  res.send("delete product");
};
const uploadImage = async (req, send) => {
  res.send("upload image");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
