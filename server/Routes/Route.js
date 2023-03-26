const express = require("express");
const router = express.Router();
const UserDetails = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const productsSchema = require("../model/productSchema");

// SignUp routes...
router.post("/signup", async (req, res) => {
  // user details recevied from client-side.....
  const { name, email, password, conPass } = req.body;

  try {
    const userExit = await UserDetails.findOne({ email: email });
    // user find..
    if (userExit) {
      res.status(200).json({
        message: "email is already allocated",
      });
    }
    // user not find..
    else {
      // user schema...
      const user = new UserDetails({
        name: name,
        email: email,
        password: password,
        conPass: conPass,
      });

      // before save the user hash password &confirm-pasword
      await user.save();

      // response send to client-side.....
      res.status(200).json({
        message: "User Signup Successfully...",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
});

// Login routes...
router.post("/login", async (req, res) => {
  // user details recevied from client-side.....
  const { email, password } = req.body;
  try {
    const userExit = await UserDetails.findOne({ email: email });
    console.log(userExit);
    if (userExit) {
      // compare user password with DB_password...
      const isMatch = await bcrypt.compare(password, userExit.password);

      // password match?
      if (isMatch) {
        // generate auth token
        const token = await userExit.generateAuthToken();

        // set cookies || expries time || cookie name
        res.cookie("userlogin", token, {
          expires: new Date(Date.now() + 900),
          httpOnly: true,
        });

        // send cookie to client-side....
        const result = {
          token,
          userExit,
        };
        res.status(401).json({
          data: result,
          message: "user Successfully login....",
        });
      }
      // password not match?
      else {
        res.status(401).json({
          message: "User password not match",
        });
      }
    } else {
      res.status(401).json({
        message: "user not exit this email",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
});

// admin routes....
router.get("/admin", authenticate, async (req, res) => {
  console.log("admin");
  // try {
  //   const validone = await UserDetails.findOne({
  //     _id: req.userId,
  //   });
  //   res.status(200).json({
  //     data: validone,
  //     message: "valid",
  //   });
  // } catch (error) {
  //   res.status(404).json({
  //     status: 404,
  //     message: error,
  //   });
  // }
});

// addproducts routes....
router.post("/addproduct", async (req, res) => {
  // product recevied from client-side.....
  const { name, price, quantity } = req.body;

  try {
    const productExit = await productsSchema.findOne({ name: name });
    if (productExit) {
      res.status(200).json({
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

// get all users...
router.get("/getusers", async (req, res) => {
  // get all products from DB
  const users = await UserDetails.find();

  if (users) {
    return res.json({
      status: 200,
      data: users,
      message: `Your are Successfully Get users...`,
    });
  } else {
    return res.json({
      status: 404,
      message: `users not found...`,
    });
  }
});
module.exports = router;
