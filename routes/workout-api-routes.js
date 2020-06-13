const Workout = require("../workoutModel.js");
const path = require("path");

module.exports = (app) => {
  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // app.post("/api/workouts", (req, res) => {
  //   db.workouts.create(
  //     {
  //       workoutType: req.body.workoutType,
  //       workoutName: req.body.workoutName,
  //       exercises: [],
  //     },
  //     (error, data) => {
  //       if (error) {
  //         res.send(error);
  //       } else {
  //         res.send(data);
  //       }
  //     }
  //   );

  // console.log(req);
  // console.log(res);
  // });

  // app.post("/api/resistance", function (req, res) {
  //   db.workouts.insert(
  //     {
  //       workoutType: req.body.workoutType,
  //       workoutName: req.body.workoutName,
  //       exercises: [],
  //     },
  //     (error, data) => {
  //       if (error) {
  //         res.send(error);
  //       } else {
  //         res.send(data);
  //       }
  //     }
  //   );

  //   console.log(req);
  //   console.log(res);
  // });

  app.post("/api/workouts/:id", function (req, res) {
    db.workouts.update(
      {
        _id: mongojs.ObjectId(req.params.id),
      },
      {
        $set: {
          workoutType: req.body.workoutType,
          workoutName: req.body.workoutName,
          exercises: [],
        },
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  // gettting all workouts to display find all workouts
  app.get("/api/workouts", function (req, res) {
    // console.log(req);
    // console.log(res);
  });
  // find by id then delete
  app.delete("/api/delete", function (req, res) {
    // console.log(req);
    // console.log(res);
  });
  // find (search mongoose . find.limit) most recent workouts for the last week. .ie 7 workouts. sen t
  app.get("/api/workouts/range", function (req, res) {
    // console.log(req);
    // console.log(res);
  });

  // new html.routes file

  app.get("/", function (app) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
