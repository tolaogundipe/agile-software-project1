const express = require("express");
const application = express();
const connect = require("./db");

connect();

application.listen(3000, () => {
  console.log("Server is running on port 3000");
});
