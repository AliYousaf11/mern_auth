const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const productsSchema = require("../model/productSchema");

// addproducts routes....
router.post("/addproduct", async (req, res) => {
  // product recevied from client-side.....
  const { name, price, quantity } = req.body;

  try {
    const productExit = await productsSchema.findOne({ name: name });
    if (productExit) {
      res.status(203).json({
        message: "Product already exit this name ",
      });
    } else {
      // new product add to product schema
      const user = new productsSchema({
        name: name,
        price: price,
        quantity: quantity,
      });
      await user.save();

      // response send to client-side.....
      res.status(200).json({
        message: "Add Product Successfully...",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
});

// get all products...
router.get("/getproduct", async (req, res) => {
  // get all products from DB
  const products = await productsSchema.find();

  return res.json({
    status: 200,
    data: products,
    message: `Your are Successfully Get Products...`,
  });
});

module.exports = router;
