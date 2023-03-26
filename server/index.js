const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/Route");

// middleware....
app.use(express.json()); // frontend send data in json format....
app.use(cors()); // crocss error resolve...
app.use("/api", router);

// db connection.....
const PORT = 8000;
require("./db/db");

// server listen...
app.listen(PORT, () => {
  console.log(`sever is listen at ${PORT}`);
});
