const mongoose = require("mongoose");

// db connection
mongoose
  .connect('mongodb+srv://aliyousaf:lakerdouble@clustername.r6egydd.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("connected database"))
  .catch((error) => console.log("error in database connection: " + error));
