const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const routes = require("./routes/workout-api-routes");

const PORT = process.env.PORT || 3000;

const Workout = require("./workoutModel.js");
const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "Workout";
const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", {
//   useNewUrlParser: true,
// });
var MONGODB_URI = process.env.MONGODB_URI || "mondodb://localhost/dbWorkout";

mongoose.connect(MONGODB_URI);
routes(app);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
