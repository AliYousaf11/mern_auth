const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");
const adminRoutes = require("./Routes/adminRoutes");

// middleware....
app.use(express.json()); // frontend send data in json format....
app.use(cors()); // crocss error resolve...
app.use("/product", productRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// db connection.....
const PORT = 8000;
require("./db/db");

// server listen...
app.listen(PORT, () => {
  console.log(`sever is listen at ${PORT}`);
});
