const jwt = require("jsonwebtoken");
const UserDetails = require("../model/userSchema");
var key = "asdfghjklqwertyuiopmnbvcxzplmoknjiu";

const authenticate = async (req, res, next) => {
  try {
    //get token from header....
    const token = req.headers.authorization;

    // verify it ..... aganest user id ....
    const verify = jwt.verify(token, key);
    const rootuser = await UserDetails.findOne({ _id: verify._id });

    // user not found....
    if (!rootuser) {
      res.status(404).json({
        status: 404,
        message: "user not found",
      });
    } else {
      //user found.....
      res.status(200).json({
        status: 200,
        data: rootuser,
        message: "user verified ..",
      });

      // ....
      next();
    }

    // req....
    // req.token = token;
    // req.rootuser = rootuser;
    // req.userId = rootuser._id;
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: "error",
    });
  }
};

module.exports = authenticate;
