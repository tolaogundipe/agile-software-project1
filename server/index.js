const express = require("express");
const application = express();
const connect = require("./db");
const Recipe = require("./models/recipe");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

// Connect to the database
connect();

// Middleware
application.use(express.json());
application.use(cors());

// Routes
application.get("/recipes", async (request, response) => {
  try {
    const recipes = await Recipe.find({});
    return response.json({ recipes });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
application.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
