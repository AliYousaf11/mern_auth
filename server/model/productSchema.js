const mongoose = require("mongoose");

// user schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require,
    trim: true,
  },
  price: {
    type: Number,
    require,
  },
  quantity: {
    type: Number,
    require,
  },
});

// user model....
const productsSchema = mongoose.model("productsSchema", productSchema);
module.exports = productsSchema;
