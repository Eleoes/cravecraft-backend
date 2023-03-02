const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema(
  {
    title: String,
    image: {
      type: String,
      default:
        "https://www.pngkey.com/detail/u2e6q8y3r5e6u2y3_placeholder-pixabay-logo-png/",
    },
    prepTime: String,
    cookingTime: String,
    skillLevel: String,
    makes: String,
    ingredients: String,
    tips: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipes", recipesSchema);
