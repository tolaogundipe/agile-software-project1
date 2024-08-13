const express = require("express");
const application = express();

application.listen(3000, () => {
  console.log("Server is running on port 3000");
});
