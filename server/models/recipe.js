const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: Map,
    of: String,
    required: true,
  },
  nutrition: {
    calories: {
      type: String,
      required: true,
    },
    totalFat: {
      type: String,
      required: true,
    },
    saturatedFat: {
      type: String,
      required: true,
    },
    cholesterol: {
      type: String,
      required: true,
    },
    sodium: {
      type: String,
      required: true,
    },
    totalCarbohydrates: {
      type: String,
      required: true,
    },
  },
  movie: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
