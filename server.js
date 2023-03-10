// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const { reset } = require("nodemon");
const recipesRouter = require("./controllers/recipes");

// Initialize the App
const app = express();

// Configure Settings
require("dotenv").config();
const { PORT, DATABASE_URL } = process.env;

// Remove the Deprecation Warning for upcoming Mongoose 7 strictQuery change
mongoose.set("strictQuery", false);

// Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

mongoose.connection
  .on("connected", () => console.log("Connected to MongoDB"))
  .on("error", (error) => console.log("MongoDB error:" + error.message));

//Mount routes
app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./controllers/root"));

app.get("/", (req, res) => {
  res.send("Welcome to the Crave Craft API");
});

app.use("/api/recipes", recipesRouter);

app.all("/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

// Tell the App to Listen
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
