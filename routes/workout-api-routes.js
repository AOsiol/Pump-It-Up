const path = require("path");
const mongojs = require("mongojs");
const { db } = require("../workoutModel.js");
const router = require("express").Router();

const workouts = require("../workoutModel.js");
router.post("/api/workouts", (req, res) => {
  workouts
    .create({})
    .then((result) => {
      console.log(result);

      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function (req, res) {
  workouts.updateOne(
    mongojs.ObjectId(req.params.id),

    {
      $set: {
        day: req.body.day,
        type: req.body.workoutType,
        name: req.body.workoutName,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
        duration: req.body.duration,
        distance: req.body.distance,
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
router.get("/api/workouts", (req, res) => {
  workouts
    .find()
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// find by id then delete
router.delete("/api/workouts/:id", ({ body }, res) => {
  workouts.findByIdAndDelete({ _id: body.id }).then((data) => {
    res.json(data);
  });
});

// find (search mongoose . find.limit) most recent workouts for the last week. .ie 7 workouts. sent. Got code from Angela
router.get("/api/workouts/range", function (req, res) {
  workouts
    .find({})
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
