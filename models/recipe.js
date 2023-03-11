const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema(
  {
    title: String,
    image: {
      type: String,
      default: "../public/assets/Fruits_Flipped.jpeg",
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
