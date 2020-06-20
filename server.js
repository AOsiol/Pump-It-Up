const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", {
//   useNewUrlParser: true,
// });

// Language used to host app and database on Heroku
mongoose.connect(
  process.env.MONGODB_URI ||
    // "mongodb://pumpitup:pumpitup1@ds041678.mlab.com:41678/heroku_sg6gsl3b",
    "mongodb://pumpit:pumpit5@ds041678.mlab.com:41678/heroku_sg6gsl3b",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes/workout-api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
