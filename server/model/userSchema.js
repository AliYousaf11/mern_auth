const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var key = "asdfghjklqwertyuiopmnbvcxzplmoknjiu";

// user schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require,
    trim: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  conPass: {
    type: String,
    require: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

// hash password & confirmpassword....
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.conPass = await bcrypt.hash(this.conPass, 12);
  }
  next();
});

// generate auth token .....
UserSchema.methods.generateAuthToken = async function () {
  try {
    //generate token...
    let token = jwt.sign({ _id: this._id }, key, {
      expiresIn: 30,
    });

    // set token to token arrry & return
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
    //.....
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
};
// user model....
const UserDetails = mongoose.model("UserDetails", UserSchema);
module.exports = UserDetails;
