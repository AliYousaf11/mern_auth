const express = require("express");
const router = express.Router();

router.get("/admin", async (req, res) => {
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
module.exports = router;
