const express = require("express");
const router = express.Router();
const UserDetails = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

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
  console.log('admin')
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

module.exports = router;
