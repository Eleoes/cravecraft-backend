const Recipes = require("../models/recipe");
const router = require("express").Router();

//Routes/Controllers
// SEED
const seedData = require("../models/recipeSEED");
router.get("/seed", (req, res) => {
  Recipes.deleteMany({}, (error, allRecipes) => {});
  Recipes.create(seedData, (error, data) => {
    res.redirect("/");
  });
});

//index
router.get("/", async (req, res) => {
  try {
    res.status(200).json(await Recipes.find({}));
  } catch (error) {
    res.status(400).json({ message: "bad request" });
  }
});

//Create
router.post("/", async (req, res) => {
  try {
    res.status(201).json(await Recipes.create(req.body));
  } catch (error) {
    res.status(400).json({ message: "bad request" });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    res.status(200).json(await Recipes.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: "bad request" });
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
  } catch (error) {
    res.status(400).json({ message: "bad request" });
  }
});

module.exports = router;
